import { getLayout, LayoutName } from './keyboards';
import {
  averageKeyDistance,
  homeRowPercentage,
  handClusteringScore,
  vowelRatio,
  characterEntropy,
  keyboardWalkScore,
  repetitionScore,
  sameFingerRatio,
  homeRowConcentration,
  limitedVowelDiversity,
  unpronouncabilityScore,
  consonantClusterScore,
  isEmail,
  extractEmailLocalPart,
  extractEmailDomain,
  isCommonDomain,
} from './utils';

export interface DetectOptions {
  /** Keyboard layout to use for analysis (default: 'qwerty') */
  layout?: LayoutName;
  /** Threshold for considering something a keysmash (default: 0.5) */
  threshold?: number;
}

export interface DetectResult {
  /** Whether this is slop (keysmash OR gibberish) */
  isSlop: boolean;
  /** Whether the input is likely a keysmash (keyboard mashing) */
  isKeysmash: boolean;
  /** Whether the input is likely gibberish (random but not keyboard-based) */
  isGibberish: boolean;
  /** Whether this slop is likely from a human (vs random/bot generation) */
  isLikelyHuman: boolean;
  /** Keysmash confidence level from 0 to 1 */
  confidence: number;
  /** Gibberish confidence level from 0 to 1 */
  gibberishConfidence: number;
  /** Individual scoring factors (for debugging/transparency) */
  factors?: {
    proximity: number;
    homeRow: number;
    handClustering: number;
    vowelRatio: number;
    entropy: number;
    keyboardWalk: number;
    repetition: number;
    sameFinger: number;
    homeRowConcentration: number;
    limitedVowels: number;
    unpronounceable: number;
    consonantClusters: number;
  };
}

// Weights for each factor in the final score
const WEIGHTS = {
  proximity: 0.10,           // Low distance between keys = more keysmash-like
  homeRow: 0.08,             // High home row usage = more keysmash-like
  handClustering: 0.06,      // One-hand dominance = more keysmash-like
  vowelRatio: 0.06,          // Abnormal vowel ratio = more keysmash-like
  entropy: 0.05,             // Low entropy = more keysmash-like
  keyboardWalk: 0.15,        // Keyboard walk patterns = works for any row
  repetition: 0.05,          // Repeated patterns = more keysmash-like
  sameFinger: 0.04,          // Same finger typing = more keysmash-like
  homeRowConcentration: 0.24, // High concentration of home row chars = keysmash-like
  limitedVowels: 0.17,       // Only 'a' as vowel = keysmash-like
};

/**
 * Normalize proximity score: keysmashes have LOW average distance
 * Score 0-1 where 1 = very keysmash-like (low distance)
 */
function normalizeProximityScore(avgDistance: number): number {
  // Average distance ranges roughly from 1 (adjacent) to 5+ (far apart)
  // Keysmashes typically have avg distance < 2
  if (avgDistance <= 1) return 1;
  if (avgDistance >= 4) return 0;
  return 1 - (avgDistance - 1) / 3;
}

/**
 * Normalize home row score: keysmashes often heavily use home row
 * Score 0-1 where 1 = high home row usage
 */
function normalizeHomeRowScore(homeRowPct: number): number {
  // Normal typing: ~30-40% home row
  // Keysmash: often 50-80% home row
  if (homeRowPct <= 0.3) return 0;
  if (homeRowPct >= 0.7) return 1;
  return (homeRowPct - 0.3) / 0.4;
}

/**
 * Normalize hand clustering: keysmashes often favor one hand
 * Score 0-1 where 1 = very clustered to one hand
 */
function normalizeHandClusteringScore(clustering: number): number {
  // 0.5 = even split, 1.0 = all one hand
  // Keysmashes often > 0.7
  if (clustering <= 0.5) return 0;
  if (clustering >= 0.9) return 1;
  return (clustering - 0.5) / 0.4;
}

/**
 * Normalize vowel ratio: English has ~38% vowels
 * Score 0-1 where 1 = abnormal vowel ratio (too high or too low)
 */
function normalizeVowelScore(ratio: number): number {
  // Normal English: ~0.38 vowels
  // Keysmashes: often very low (0.1-0.2) or sometimes high (0.5+)
  const normalRatio = 0.38;
  const deviation = Math.abs(ratio - normalRatio);
  
  if (deviation <= 0.1) return 0;
  if (deviation >= 0.3) return 1;
  return (deviation - 0.1) / 0.2;
}

/**
 * Normalize entropy: lower entropy = more repetitive
 * Score 0-1 where 1 = low entropy (repetitive)
 */
function normalizeEntropyScore(entropy: number, textLength: number): number {
  // Max entropy for text of length n with unique chars = log2(n)
  // Keysmashes often have entropy < 2.5
  // Normal text: typically 3-4+
  
  // Adjust expectations based on text length
  const maxExpectedEntropy = Math.min(4, Math.log2(Math.max(2, textLength)));
  
  if (entropy >= maxExpectedEntropy) return 0;
  if (entropy <= 1.5) return 1;
  return 1 - (entropy - 1.5) / (maxExpectedEntropy - 1.5);
}

/**
 * Normalize home row concentration: chaotic keysmashes have 60%+ home row chars
 * Score 0-1 where 1 = very high concentration
 */
function normalizeHomeRowConcentration(concentration: number): number {
  // Normal English text: ~35% home row characters
  // Keysmashes: often 60-100% home row characters
  if (concentration <= 0.35) return 0;
  if (concentration >= 0.7) return 1;
  return (concentration - 0.35) / 0.35;
}

/**
 * Core detection function
 */
export function detect(input: string, options: DetectOptions = {}): DetectResult {
  const { layout: layoutName = 'qwerty', threshold = 0.5 } = options;
  const layout = getLayout(layoutName);
  
  // Handle empty or very short strings
  if (!input || input.length < 2) {
    return { isSlop: false, isKeysmash: false, isGibberish: false, isLikelyHuman: false, confidence: 0, gibberishConfidence: 0 };
  }
  
  // Handle email addresses specially
  let textToAnalyze = input;
  let isEmailInput = false;
  let domainScore = 0;
  
  if (isEmail(input)) {
    isEmailInput = true;
    textToAnalyze = extractEmailLocalPart(input);
    
    // Also check domain for suspicious patterns (unless it's a common domain)
    const domain = extractEmailDomain(input);
    if (!isCommonDomain(domain) && domain.length >= 3) {
      // Check if domain looks like a keysmash
      const domainHomeRow = homeRowConcentration(domain);
      const domainWalk = keyboardWalkScore(domain);
      domainScore = Math.max(domainHomeRow, domainWalk);
    }
    
    // Remove common email separators for analysis
    textToAnalyze = textToAnalyze.replace(/[._-]/g, '');
  }
  
  // If the cleaned text is too short, assume not a keysmash
  if (textToAnalyze.length < 3) {
    return { isSlop: false, isKeysmash: false, isGibberish: false, isLikelyHuman: false, confidence: 0, gibberishConfidence: 0 };
  }
  
  // Calculate all factors
  const avgDistance = averageKeyDistance(textToAnalyze, layout);
  const homeRowPct = homeRowPercentage(textToAnalyze, layout);
  const handCluster = handClusteringScore(textToAnalyze, layout);
  const vowelPct = vowelRatio(textToAnalyze);
  const entropy = characterEntropy(textToAnalyze);
  const walkScore = keyboardWalkScore(textToAnalyze);
  const repScore = repetitionScore(textToAnalyze);
  const fingerScore = sameFingerRatio(textToAnalyze, layout);
  const homeRowConc = homeRowConcentration(textToAnalyze);
  const limitedVowelScore = limitedVowelDiversity(textToAnalyze);
  const unpronounceScore = unpronouncabilityScore(textToAnalyze);
  const consonantScore = consonantClusterScore(textToAnalyze);
  
  // Normalize scores to 0-1 range where 1 = keysmash-like
  const factors = {
    proximity: normalizeProximityScore(avgDistance),
    homeRow: normalizeHomeRowScore(homeRowPct),
    handClustering: normalizeHandClusteringScore(handCluster),
    vowelRatio: normalizeVowelScore(vowelPct),
    entropy: normalizeEntropyScore(entropy, textToAnalyze.length),
    keyboardWalk: walkScore,
    repetition: repScore,
    sameFinger: fingerScore,
    homeRowConcentration: normalizeHomeRowConcentration(homeRowConc),
    limitedVowels: limitedVowelScore,
    unpronounceable: unpronounceScore,
    consonantClusters: consonantScore,
  };
  
  // Calculate weighted confidence score for keysmash
  let confidence =
    factors.proximity * WEIGHTS.proximity +
    factors.homeRow * WEIGHTS.homeRow +
    factors.handClustering * WEIGHTS.handClustering +
    factors.vowelRatio * WEIGHTS.vowelRatio +
    factors.entropy * WEIGHTS.entropy +
    factors.keyboardWalk * WEIGHTS.keyboardWalk +
    factors.repetition * WEIGHTS.repetition +
    factors.sameFinger * WEIGHTS.sameFinger +
    factors.homeRowConcentration * WEIGHTS.homeRowConcentration +
    factors.limitedVowels * WEIGHTS.limitedVowels;
  
  // Boost for clear keyboard walk patterns (like "qwerty", "zxcvbn", "qwertyuiop")
  // If both proximity and keyboardWalk are high, it's almost certainly a keysmash
  if (factors.proximity >= 0.9 && factors.keyboardWalk >= 0.8) {
    confidence += 0.30; // Strong boost to catch top/bottom row walks
  } else if (factors.keyboardWalk >= 0.5 && factors.proximity >= 0.7) {
    confidence += 0.15; // Moderate boost for partial keyboard walks
  }
  
  // For emails: also consider domain keysmash score
  if (isEmailInput && domainScore > 0.5) {
    confidence += domainScore * 0.2; // Boost if domain looks suspicious
  }
  
  // Apply email penalty (reduced if domain is also suspicious)
  if (isEmailInput && domainScore <= 0.5) {
    confidence *= 0.7; // Reduce confidence by 30% for normal-looking email domains
  }
  
  // Apply short string penalty ONLY if no strong keyboard walk pattern detected
  if (textToAnalyze.length <= 5 && factors.keyboardWalk < 0.1) {
    confidence *= 0.6;
  }
  
  // Calculate gibberish confidence (different from keysmash)
  // Gibberish = unpronounceable random strings that may not be keyboard-based
  let gibberishConfidence = 
    factors.unpronounceable * 0.5 +
    factors.consonantClusters * 0.3 +
    factors.vowelRatio * 0.2;
  
  // Boost gibberish score for long random-looking strings
  if (textToAnalyze.length > 10 && factors.unpronounceable > 0.6) {
    gibberishConfidence += 0.15;
  }
  
  // Clamp confidence values to 0-1 range
  confidence = Math.max(0, Math.min(1, confidence));
  gibberishConfidence = Math.max(0, Math.min(1, gibberishConfidence));
  
  const isKeysmash = confidence >= threshold;
  const isGibberish = gibberishConfidence >= threshold && !isKeysmash;
  const isSlop = isKeysmash || isGibberish;
  
  // Determine if slop is likely from a human
  // Keysmashes with high home row concentration and proximity are very human
  // Random gibberish with no keyboard pattern is more likely bot/random generation
  let isLikelyHuman = false;
  if (isKeysmash) {
    // High proximity + home row = human mashing keyboard
    isLikelyHuman = factors.proximity > 0.5 || factors.homeRowConcentration > 0.5 || factors.keyboardWalk > 0.3;
  } else if (isGibberish) {
    // Gibberish is less likely human unless it has some keyboard patterns
    isLikelyHuman = factors.proximity > 0.3 && factors.homeRowConcentration > 0.3;
  }
  
  return {
    isSlop,
    isKeysmash,
    isGibberish,
    isLikelyHuman,
    confidence: Math.round(confidence * 100) / 100,
    gibberishConfidence: Math.round(gibberishConfidence * 100) / 100,
    factors,
  };
}

export interface SentenceResult {
  /** Whether the sentence contains slop */
  isSlop: boolean;
  /** Whether it's likely from a human */
  isLikelyHuman: boolean;
  /** Overall slop score for the sentence */
  slopScore: number;
  /** Number of slop words detected */
  slopWordCount: number;
  /** Total words analyzed */
  totalWords: number;
  /** Percentage of slop words */
  slopPercentage: number;
  /** Individual word results */
  words: Array<{ word: string; isSlop: boolean; confidence: number }>;
}

/**
 * Detect slop in a sentence or longer text
 * Analyzes each word and returns aggregate results
 */
export function detectSentence(input: string, options: DetectOptions = {}): SentenceResult {
  const { threshold = 0.5 } = options;
  
  // Split into words, filter out empty strings and very short words
  const words = input
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);
  
  if (words.length === 0) {
    return {
      isSlop: false,
      isLikelyHuman: false,
      slopScore: 0,
      slopWordCount: 0,
      totalWords: 0,
      slopPercentage: 0,
      words: [],
    };
  }
  
  const wordResults = words.map(word => {
    const result = detect(word, options);
    return {
      word,
      isSlop: result.isSlop,
      confidence: Math.max(result.confidence, result.gibberishConfidence),
    };
  });
  
  const slopWords = wordResults.filter(w => w.isSlop);
  const slopWordCount = slopWords.length;
  const totalWords = wordResults.length;
  const slopPercentage = totalWords > 0 ? slopWordCount / totalWords : 0;
  
  // Calculate average slop score
  const avgSlopScore = wordResults.reduce((sum, w) => sum + w.confidence, 0) / totalWords;
  
  // Sentence is slop if >30% of words are slop OR average score is high
  const isSlop = slopPercentage > 0.3 || avgSlopScore > threshold;
  
  // Likely human if slop words have keyboard patterns
  const humanSlopWords = slopWords.filter(w => {
    const r = detect(w.word, options);
    return r.isLikelyHuman;
  });
  const isLikelyHuman = humanSlopWords.length > slopWordCount * 0.5;
  
  return {
    isSlop,
    isLikelyHuman,
    slopScore: Math.round(avgSlopScore * 100) / 100,
    slopWordCount,
    totalWords,
    slopPercentage: Math.round(slopPercentage * 100) / 100,
    words: wordResults,
  };
}

