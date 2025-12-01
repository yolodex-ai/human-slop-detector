import { KeyboardLayout, KeyPosition } from './keyboards';
import { ALL_BIGRAMS } from './languages';

/**
 * Calculate Euclidean distance between two keys on the keyboard
 */
export function keyDistance(pos1: KeyPosition, pos2: KeyPosition): number {
  // Account for keyboard stagger (each row is offset by ~0.25-0.5 units)
  const rowStagger = [0, 0.25, 0.5, 0.75];
  const col1 = pos1.col + (rowStagger[pos1.row] || 0);
  const col2 = pos2.col + (rowStagger[pos2.row] || 0);
  
  const rowDiff = pos1.row - pos2.row;
  const colDiff = col1 - col2;
  
  return Math.sqrt(rowDiff * rowDiff + colDiff * colDiff);
}

/**
 * Calculate average distance between consecutive characters in a string
 */
export function averageKeyDistance(text: string, layout: KeyboardLayout): number {
  const chars = text.toLowerCase().split('');
  if (chars.length < 2) return 0;
  
  let totalDistance = 0;
  let validPairs = 0;
  
  for (let i = 0; i < chars.length - 1; i++) {
    const pos1 = layout[chars[i]];
    const pos2 = layout[chars[i + 1]];
    
    if (pos1 && pos2) {
      totalDistance += keyDistance(pos1, pos2);
      validPairs++;
    }
  }
  
  return validPairs > 0 ? totalDistance / validPairs : 0;
}

/**
 * Check if a string looks like an email address
 */
export function isEmail(text: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
}

/**
 * Extract the local part of an email (before the @)
 */
export function extractEmailLocalPart(email: string): string {
  const atIndex = email.indexOf('@');
  return atIndex > 0 ? email.substring(0, atIndex) : email;
}

/**
 * Extract domain name (without TLD) from email
 */
export function extractEmailDomain(email: string): string {
  const atIndex = email.indexOf('@');
  if (atIndex < 0) return '';
  const domain = email.substring(atIndex + 1);
  const dotIndex = domain.lastIndexOf('.');
  return dotIndex > 0 ? domain.substring(0, dotIndex) : domain;
}

/**
 * Common email domains that shouldn't be flagged
 */
const COMMON_DOMAINS = new Set([
  'gmail', 'yahoo', 'hotmail', 'outlook', 'icloud', 'aol',
  'mail', 'protonmail', 'zoho', 'yandex', 'gmx', 'live',
  'msn', 'comcast', 'verizon', 'att', 'cox', 'sbcglobal',
]);

export function isCommonDomain(domain: string): boolean {
  return COMMON_DOMAINS.has(domain.toLowerCase());
}

/**
 * Calculate pronounceability score based on common bigrams across 20 languages
 * Returns 0-1 where 1 = very unpronounceable (gibberish)
 */
export function unpronouncabilityScore(text: string): number {
  const lower = text.toLowerCase().replace(/[^a-z]/g, '');
  if (lower.length < 3) return 0;
  
  let commonBigrams = 0;
  let totalBigrams = 0;
  
  for (let i = 0; i < lower.length - 1; i++) {
    const bigram = lower.substring(i, i + 2);
    totalBigrams++;
    if (ALL_BIGRAMS.has(bigram)) {
      commonBigrams++;
    }
  }
  
  if (totalBigrams === 0) return 0;
  
  // Ratio of uncommon bigrams (higher = more gibberish-like)
  const uncommonRatio = 1 - (commonBigrams / totalBigrams);
  
  // Also check for repeated characters (like "sssss")
  const repeatPenalty = (lower.match(/(.)\1{2,}/g) || []).length > 0 ? 0.2 : 0;
  
  return Math.min(1, uncommonRatio + repeatPenalty);
}

/**
 * Check for excessive consonant clusters (unpronounceable)
 */
export function consonantClusterScore(text: string): number {
  const lower = text.toLowerCase().replace(/[^a-z]/g, '');
  if (lower.length < 4) return 0;
  
  // Find consonant clusters of 4+ characters
  const clusters = lower.match(/[^aeiou]{4,}/g) || [];
  
  if (clusters.length === 0) return 0;
  
  // Total length of consonant clusters vs total length
  const clusterLength = clusters.reduce((sum, c) => sum + c.length, 0);
  return Math.min(1, clusterLength / lower.length);
}

/**
 * Calculate the percentage of characters on the home row
 */
export function homeRowPercentage(text: string, layout: KeyboardLayout): number {
  const chars = text.toLowerCase().split('');
  if (chars.length === 0) return 0;
  
  let homeRowCount = 0;
  let validChars = 0;
  
  for (const char of chars) {
    const pos = layout[char];
    if (pos) {
      validChars++;
      if (pos.row === 2) { // Home row is row 2
        homeRowCount++;
      }
    }
  }
  
  return validChars > 0 ? homeRowCount / validChars : 0;
}

/**
 * Calculate the percentage of characters typed by one hand
 */
export function handClusteringScore(text: string, layout: KeyboardLayout): number {
  const chars = text.toLowerCase().split('');
  if (chars.length === 0) return 0;
  
  let leftCount = 0;
  let rightCount = 0;
  
  for (const char of chars) {
    const pos = layout[char];
    if (pos) {
      if (pos.hand === 'left') leftCount++;
      else rightCount++;
    }
  }
  
  const total = leftCount + rightCount;
  if (total === 0) return 0;
  
  // Return the percentage of the dominant hand (0.5 = even split, 1.0 = all one hand)
  return Math.max(leftCount, rightCount) / total;
}

/**
 * Calculate vowel ratio in a string
 */
export function vowelRatio(text: string): number {
  const chars = text.toLowerCase().split('').filter(c => /[a-z]/.test(c));
  if (chars.length === 0) return 0;
  
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelCount = chars.filter(c => vowels.has(c)).length;
  
  return vowelCount / chars.length;
}

/**
 * Calculate character entropy (measure of randomness)
 * Lower entropy = more repetitive patterns
 */
export function characterEntropy(text: string): number {
  const chars = text.toLowerCase();
  if (chars.length === 0) return 0;
  
  const freq: Record<string, number> = {};
  for (const char of chars) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  let entropy = 0;
  const len = chars.length;
  
  for (const count of Object.values(freq)) {
    const p = count / len;
    entropy -= p * Math.log2(p);
  }
  
  return entropy;
}

/**
 * Common keyboard walk patterns (adjacent keys typed in sequence)
 */
export const KEYBOARD_WALK_PATTERNS = [
  // Full row walks (very strong signal)
  'qwerty', 'qwertyuiop', 'asdfgh', 'asdfghjkl', 'zxcvbn', 'zxcvbnm',
  // QWERTY horizontal walks - 4+ chars
  'qwert', 'werty', 'ertyu', 'rtyui', 'tyuio', 'yuiop',
  'asdf', 'sdfg', 'dfgh', 'fghj', 'ghjk', 'hjkl',
  'zxcv', 'xcvb', 'cvbn', 'vbnm',
  // QWERTY horizontal walks - 3 chars
  'qwe', 'wer', 'ert', 'rty', 'tyu', 'yui', 'uio', 'iop',
  'asd', 'sdf', 'dfg', 'fgh', 'ghj', 'hjk', 'jkl',
  'zxc', 'xcv', 'cvb', 'vbn', 'bnm',
  // Reverse patterns - long
  'ytrewq', 'trewq', 'poiuy', 'poiuyt', 'lkjhgfdsa', 'lkjhgf', 'lkjhg', 'lkjh',
  'fdsa', 'gfdsa', 'hgfdsa', 'mnbvcxz', 'mnbvcx', 'mnbvc', 'mnbv',
  // Reverse patterns - short
  'ewq', 'rew', 'tre', 'ytr', 'uyt', 'iuy', 'oiu', 'poi',
  'lkj', 'kjh', 'jhg', 'hgf', 'gfd', 'fds', 'dsa',
  'vcx', 'cxz', 'nmb', 'mbv', 'bvc',
  // Diagonal patterns
  'qaz', 'wsx', 'edc', 'rfv', 'tgb', 'yhn', 'ujm',
  'zaq', 'xsw', 'cde', 'vfr', 'bgt', 'nhy', 'mju',
  // Cross-row common patterns
  'qweasd', 'qweasdzxc', 'asdzxc', 'wertsdfg', 'ertdfgh',
  // Common short patterns
  'jkl;', 'fghjkl', 'sdfghjkl', 'sdf', 'fds', 'jkl', 'lkj',
];

/**
 * Check how many keyboard walk patterns are present in the text
 */
export function keyboardWalkScore(text: string): number {
  const lower = text.toLowerCase();
  let matches = 0;
  
  for (const pattern of KEYBOARD_WALK_PATTERNS) {
    if (lower.includes(pattern)) {
      matches++;
    }
  }
  
  // Normalize by string length (longer strings naturally have more potential matches)
  const normalizedScore = matches / Math.max(1, Math.sqrt(text.length));
  return Math.min(1, normalizedScore);
}

/**
 * Check for repeated character sequences
 */
export function repetitionScore(text: string): number {
  const lower = text.toLowerCase();
  if (lower.length < 4) return 0;
  
  let repeats = 0;
  
  // Check for 2-char repeating patterns (immediate adjacent)
  for (let i = 0; i < lower.length - 3; i++) {
    const pattern = lower.substring(i, i + 2);
    if (lower.substring(i + 2, i + 4) === pattern) {
      repeats++;
    }
  }
  
  // Check for 3-char repeating patterns (immediate adjacent)
  for (let i = 0; i < lower.length - 5; i++) {
    const pattern = lower.substring(i, i + 3);
    if (lower.substring(i + 3, i + 6) === pattern) {
      repeats++;
    }
  }
  
  // Check for 4-char repeating patterns (gaming patterns like "wsad")
  for (let i = 0; i < lower.length - 7; i++) {
    const pattern = lower.substring(i, i + 4);
    if (lower.substring(i + 4, i + 8) === pattern) {
      repeats += 2; // Weight 4-char repeats more heavily
    }
  }
  
  // Check if entire string is a repeated pattern (e.g., "wsadwsadwsad")
  for (let patternLen = 2; patternLen <= Math.min(6, Math.floor(lower.length / 2)); patternLen++) {
    const pattern = lower.substring(0, patternLen);
    const expectedRepetitions = Math.floor(lower.length / patternLen);
    if (expectedRepetitions >= 2) {
      const repeated = pattern.repeat(expectedRepetitions);
      // Check if string starts with repeated pattern (allowing trailing chars)
      if (lower.startsWith(repeated) || lower === repeated) {
        repeats += expectedRepetitions;
        break; // Found a full repetition pattern
      }
    }
  }
  
  return Math.min(1, repeats / (text.length / 2));
}

/**
 * Calculate same-finger typing ratio (keysmashes often use same finger repeatedly)
 */
export function sameFingerRatio(text: string, layout: KeyboardLayout): number {
  const chars = text.toLowerCase().split('');
  if (chars.length < 2) return 0;
  
  let sameFingerCount = 0;
  let validPairs = 0;
  
  for (let i = 0; i < chars.length - 1; i++) {
    const pos1 = layout[chars[i]];
    const pos2 = layout[chars[i + 1]];
    
    if (pos1 && pos2) {
      validPairs++;
      if (pos1.finger === pos2.finger && pos1.hand === pos2.hand) {
        sameFingerCount++;
      }
    }
  }
  
  return validPairs > 0 ? sameFingerCount / validPairs : 0;
}

/**
 * Home row character set for QWERTY (the most commonly smashed keys)
 */
const HOME_ROW_CHARS = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);

/**
 * Calculate concentration of home row characters
 * Chaotic keysmashes have very high concentrations of these letters
 * even without sequential patterns
 */
export function homeRowConcentration(text: string): number {
  const chars = text.toLowerCase().split('').filter(c => /[a-z]/.test(c));
  if (chars.length === 0) return 0;
  
  const homeRowCount = chars.filter(c => HOME_ROW_CHARS.has(c)).length;
  return homeRowCount / chars.length;
}

/**
 * Check if vowels are limited to just 'a' (common in home row keysmashes)
 * Real words have diverse vowels; keysmashes often only have 'a'
 */
export function limitedVowelDiversity(text: string): number {
  const chars = text.toLowerCase().split('').filter(c => /[a-z]/.test(c));
  if (chars.length === 0) return 0;
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelCounts: Record<string, number> = {};
  let totalVowels = 0;
  
  for (const char of chars) {
    if (vowels.includes(char)) {
      vowelCounts[char] = (vowelCounts[char] || 0) + 1;
      totalVowels++;
    }
  }
  
  if (totalVowels === 0) return 1; // No vowels = suspicious
  
  // If 'a' makes up most/all of the vowels, it's suspicious
  const aCount = vowelCounts['a'] || 0;
  const aRatio = aCount / totalVowels;
  
  // Also check for very low vowel count overall
  const vowelRatio = totalVowels / chars.length;
  
  // Combine: high 'a' dominance among vowels + low overall vowel ratio
  if (vowelRatio < 0.15 && aRatio > 0.8) return 1;
  if (vowelRatio < 0.2 && aRatio > 0.9) return 0.8;
  if (aRatio === 1 && totalVowels > 0) return 0.6;
  
  return 0;
}

