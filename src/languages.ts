/**
 * Multilingual bigram data for gibberish detection
 * Covers the top 20 most common languages on the internet
 */

export type LanguageCode = 
  | 'en' | 'zh' | 'es' | 'ar' | 'pt' | 'id' | 'fr' | 'ja' | 'ru' | 'de'
  | 'ko' | 'it' | 'tr' | 'vi' | 'pl' | 'nl' | 'th' | 'hi' | 'fa' | 'sv';

export const LANGUAGE_NAMES: Record<LanguageCode, string> = {
  en: 'English',
  zh: 'Chinese',
  es: 'Spanish',
  ar: 'Arabic',
  pt: 'Portuguese',
  id: 'Indonesian',
  fr: 'French',
  ja: 'Japanese',
  ru: 'Russian',
  de: 'German',
  ko: 'Korean',
  it: 'Italian',
  tr: 'Turkish',
  vi: 'Vietnamese',
  pl: 'Polish',
  nl: 'Dutch',
  th: 'Thai',
  hi: 'Hindi',
  fa: 'Persian',
  sv: 'Swedish',
};

/**
 * Common bigrams for Latin-script languages
 * These are the most frequent two-letter combinations
 */

// English bigrams
export const BIGRAMS_EN = new Set([
  'th', 'he', 'in', 'en', 'nt', 'er', 'on', 'an', 're', 'ed',
  'nd', 'at', 'ou', 'es', 'ea', 'ti', 'to', 'it', 'st', 'io',
  'le', 'is', 'or', 'ar', 'as', 'te', 'se', 'me', 'of', 'al',
  'de', 'so', 'ne', 've', 'ha', 'hi', 'ri', 'ro', 'ic', 'ng',
  'co', 'ma', 'ce', 'li', 'ch', 'll', 'be', 'ge', 'us', 'wa',
  'wh', 'ee', 'no', 'pe', 'el', 'oo', 'ss', 'tt', 'ff', 'pp',
]);

// Spanish bigrams
export const BIGRAMS_ES = new Set([
  'de', 'en', 'el', 'la', 'es', 'os', 'as', 'on', 'er', 'an',
  'ue', 'ar', 'al', 'ad', 'ra', 'or', 'ci', 'ón', 'io', 'te',
  'co', 'ta', 'se', 'no', 'ie', 'do', 'un', 're', 'ca', 'pa',
  'to', 'ri', 'ro', 'qu', 'nt', 'ti', 'da', 'po', 'so', 'me',
  'pe', 'lo', 'le', 'na', 'tr', 'si', 'di', 'mo', 'ma', 'mi',
]);

// Portuguese bigrams
export const BIGRAMS_PT = new Set([
  'de', 'os', 'as', 'do', 'da', 'em', 'es', 'er', 'ra', 'en',
  'qu', 'ão', 'co', 'ar', 'ao', 'te', 'se', 'an', 'or', 'ta',
  'al', 're', 'on', 'om', 'nt', 'me', 'is', 'po', 'to', 'ro',
  'ca', 'no', 'pa', 'ri', 'ad', 'ma', 'st', 'ti', 'ia', 'io',
  'na', 'am', 'nd', 'el', 'pe', 'mo', 'pr', 'so', 'mi', 'um',
]);

// French bigrams
export const BIGRAMS_FR = new Set([
  'es', 'le', 'de', 'en', 'on', 're', 'nt', 'er', 'te', 'an',
  'ou', 'ai', 'et', 'se', 'it', 'la', 'is', 'me', 'qu', 'ti',
  'ue', 'ur', 'ne', 'ce', 'ns', 'ie', 'co', 'tr', 'ra', 'pa',
  'ar', 'il', 'au', 'ta', 'ir', 'or', 'eu', 'ss', 'io', 'ch',
  'pe', 'in', 'st', 've', 'pr', 'po', 'ri', 'ma', 'un', 'to',
]);

// German bigrams
export const BIGRAMS_DE = new Set([
  'en', 'er', 'ch', 'de', 'nd', 'ei', 'ie', 'ge', 'in', 'te',
  'be', 'un', 'es', 'st', 'an', 'au', 'he', 'ne', 're', 'ng',
  'se', 'di', 'ic', 'sch', 'le', 'da', 'it', 'zu', 'al', 'ht',
  'si', 'we', 'wi', 'mi', 'or', 'li', 'ti', 'ar', 'nt', 'ha',
  'is', 'hr', 'ss', 'so', 'ab', 'us', 'on', 'ig', 'el', 'ur',
]);

// Italian bigrams
export const BIGRAMS_IT = new Set([
  'er', 'on', 'an', 're', 'en', 'to', 'io', 'ti', 'el', 'ta',
  'te', 'in', 'ch', 'la', 'al', 'le', 'co', 'de', 'or', 'no',
  'ne', 'ra', 'ri', 'at', 'ar', 'li', 'es', 'nt', 'ca', 'st',
  'is', 'pe', 'it', 'se', 'si', 'ro', 'ia', 'so', 'un', 'ol',
  'os', 'ma', 'me', 'tt', 'il', 'lo', 'nd', 'po', 'pr', 'ss',
]);

// Dutch bigrams
export const BIGRAMS_NL = new Set([
  'en', 'de', 'an', 'er', 'he', 'et', 'te', 'in', 'ge', 'va',
  'ee', 'ij', 'ng', 'aa', 'nd', 'or', 'st', 'oo', 'ar', 'ie',
  've', 'el', 'al', 'be', 'is', 'on', 'le', 'di', 'me', 're',
  'da', 'op', 'ze', 'we', 'oe', 'wo', 'ni', 'om', 'ch', 'ke',
  'ti', 'ig', 'at', 'je', 'wa', 'li', 'ag', 'ko', 'zo', 'ui',
]);

// Polish bigrams
export const BIGRAMS_PL = new Set([
  'ie', 'ni', 'ch', 'an', 'rz', 'po', 'na', 'ow', 'cz', 'pr',
  'st', 'za', 'od', 'wa', 'je', 'sz', 'go', 'do', 'ro', 'mi',
  'ta', 'ko', 'te', 'ra', 'em', 'ka', 'al', 'to', 'ia', 'dz',
  'sk', 'no', 'wi', 'si', 'ws', 'ży', 'że', 'ść', 'li', 'en',
  'wy', 'by', 'ty', 'da', 'ba', 'pa', 'ma', 'lu', 'mo', 'ze',
]);

// Swedish bigrams
export const BIGRAMS_SV = new Set([
  'en', 'ar', 'er', 'de', 'an', 'tt', 'et', 'in', 'or', 'te',
  'ra', 'st', 'ör', 'om', 'ng', 'av', 'ti', 'al', 'på', 'ig',
  'at', 'ta', 'ka', 're', 'me', 'äl', 'ha', 'nd', 'ge', 'so',
  'ri', 'un', 'li', 'fö', 'la', 'le', 'is', 'sk', 'va', 'ro',
  'da', 'il', 'ke', 'nt', 'ad', 'na', 'vi', 'mi', 'ån', 'el',
]);

// Turkish bigrams
export const BIGRAMS_TR = new Set([
  'ar', 'la', 'er', 'le', 'an', 'in', 'de', 'en', 'ir', 'ak',
  'da', 'bi', 'ri', 'il', 'ta', 'al', 'ın', 'ka', 'ya', 'ır',
  'ma', 'ol', 'dı', 'ba', 'li', 'ek', 'or', 'me', 'is', 'si',
  'ra', 'ler', 'el', 'un', 'te', 'ne', 'nd', 'ik', 'ği', 'mı',
  'şı', 'üz', 'öz', 'çı', 'na', 'as', 'ge', 'be', 'ye', 'sa',
]);

// Indonesian/Malay bigrams
export const BIGRAMS_ID = new Set([
  'an', 'ng', 'me', 'en', 'ka', 'er', 'da', 'di', 'pe', 'ak',
  'be', 'ar', 'in', 'ya', 'te', 'ta', 'se', 'la', 'ke', 'ra',
  'ma', 'al', 'at', 'ri', 'ti', 'pa', 'ba', 'ga', 'sa', 'ha',
  'un', 'na', 'or', 'el', 'it', 'us', 'ia', 'is', 'am', 'as',
  'tu', 'ol', 'on', 'ad', 'uk', 'em', 'ur', 'il', 'ap', 'ah',
]);

// Vietnamese bigrams (romanized)
export const BIGRAMS_VI = new Set([
  'ng', 'nh', 'ch', 'th', 'tr', 'ph', 'gi', 'kh', 'qu', 'ho',
  'ha', 'hi', 'an', 'on', 'en', 'in', 'un', 'ao', 'ai', 'oi',
  'ua', 'ue', 'uo', 'ie', 'ia', 'iu', 'ay', 'ey', 'oy', 'uy',
  'ău', 'âu', 'êu', 'iê', 'uô', 'ươ', 'la', 'le', 'lo', 'lu',
  'ma', 'me', 'mi', 'mo', 'mu', 'na', 'ne', 'ni', 'no', 'nu',
]);

// Russian bigrams (romanized/transliterated)
export const BIGRAMS_RU = new Set([
  'to', 'na', 'st', 'en', 'ko', 'no', 'ov', 'po', 'ra', 'ro',
  'ta', 'os', 'go', 'vo', 'an', 'et', 'ni', 'te', 'ne', 'pr',
  'za', 've', 'li', 'ka', 'ya', 'da', 'od', 'ch', 'sh', 'sk',
  'ti', 'ol', 'it', 'is', 'al', 'ze', 'or', 'er', 'ot', 'on',
  'om', 'at', 'ob', 'pe', 'be', 'so', 'mo', 'de', 'ry', 'mi',
]);

// Arabic bigrams (romanized)
export const BIGRAMS_AR = new Set([
  'al', 'la', 'an', 'in', 'wa', 'ma', 'fi', 'li', 'ya', 'ha',
  'el', 'il', 'ab', 'ad', 'ar', 'as', 'at', 'am', 'ah', 'ay',
  'ba', 'bi', 'da', 'di', 'fa', 'ka', 'ki', 'mi', 'na', 'ni',
  'ra', 'ri', 'sa', 'si', 'ta', 'th', 'sh', 'kh', 'gh', 'dh',
  'qe', 'qa', 'hu', 'hi', 'ul', 'un', 'ur', 'us', 'oo', 'ee',
]);

// Persian/Farsi bigrams (romanized)
export const BIGRAMS_FA = new Set([
  'an', 'ar', 'az', 'ba', 'be', 'da', 'de', 'di', 'do', 'es',
  'fa', 'ha', 'in', 'ir', 'is', 'ka', 'ke', 'kh', 'ko', 'ma',
  'mi', 'mo', 'na', 'ne', 'ni', 'ra', 're', 'ri', 'ro', 'sa',
  'se', 'sh', 'ta', 'te', 'to', 'va', 'ya', 'ye', 'za', 'ze',
  'am', 'at', 'as', 'ad', 'al', 'om', 'on', 'or', 'os', 'oo',
]);

// Hindi bigrams (romanized)
export const BIGRAMS_HI = new Set([
  'ka', 'ki', 'ke', 'ko', 'ku', 'ha', 'hi', 'he', 'ho', 'hu',
  'na', 'ni', 'ne', 'no', 'nu', 'ma', 'mi', 'me', 'mo', 'mu',
  'ra', 'ri', 're', 'ro', 'ru', 'la', 'li', 'le', 'lo', 'lu',
  'sa', 'si', 'se', 'so', 'su', 'ta', 'ti', 'te', 'to', 'tu',
  'pa', 'pi', 'pe', 'po', 'pu', 'ya', 'ba', 'da', 'ga', 'ja',
  'aa', 'ee', 'ii', 'oo', 'uu', 'ai', 'au', 'an', 'in', 'un',
]);

// Japanese bigrams (romanized)
export const BIGRAMS_JA = new Set([
  'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'si', 'su', 'se', 'so',
  'ta', 'ti', 'tu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no',
  'ha', 'hi', 'hu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo',
  'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo',
  'ga', 'gi', 'gu', 'ge', 'go', 'za', 'zu', 'ze', 'zo', 'da',
  'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu',
  'sh', 'ch', 'ts', 'nn', 'tt', 'kk', 'ss', 'pp', 'ou', 'ei',
]);

// Korean bigrams (romanized)
export const BIGRAMS_KO = new Set([
  'ha', 'an', 'eu', 'eo', 'ga', 'da', 'na', 'ra', 'ma', 'ba',
  'sa', 'ja', 'cha', 'ka', 'ta', 'pa', 'yo', 'wa', 'wi', 'we',
  'ng', 'ui', 'ae', 'oe', 'uh', 'oh', 'ah', 'ee', 'oo', 'ya',
  'ye', 'yu', 'in', 'un', 'en', 'on', 'im', 'um', 'em', 'om',
  'go', 'do', 'no', 'ro', 'mo', 'bo', 'so', 'jo', 'geu', 'deu',
]);

// Chinese bigrams (pinyin romanized)
export const BIGRAMS_ZH = new Set([
  'sh', 'ch', 'zh', 'ng', 'an', 'en', 'in', 'un', 'ai', 'ei',
  'ao', 'ou', 'ia', 'ie', 'iu', 'ua', 'uo', 'üe', 'er', 'de',
  'le', 'ge', 'he', 'ke', 'me', 'ne', 're', 'se', 'te', 'ze',
  'ba', 'bi', 'bu', 'da', 'di', 'du', 'fa', 'fu', 'ga', 'gu',
  'ha', 'hu', 'ji', 'ju', 'ka', 'ku', 'la', 'li', 'lu', 'ma',
  'mi', 'mu', 'na', 'ni', 'nu', 'pa', 'pi', 'pu', 'qi', 'qu',
  'ri', 'ru', 'si', 'su', 'ti', 'tu', 'xi', 'xu', 'yi', 'yu',
]);

// Thai bigrams (romanized)
export const BIGRAMS_TH = new Set([
  'ai', 'an', 'ao', 'at', 'am', 'ak', 'ap', 'ang', 'en', 'in',
  'on', 'un', 'ek', 'ok', 'uk', 'om', 'um', 'em', 'im', 'ong',
  'th', 'ph', 'ch', 'kh', 'ng', 'kw', 'kr', 'kl', 'pr', 'pl',
  'tr', 'ra', 'ri', 'ro', 'ru', 're', 'la', 'li', 'lo', 'lu',
  'ma', 'mi', 'mo', 'mu', 'me', 'na', 'ni', 'no', 'nu', 'ne',
  'sa', 'si', 'so', 'su', 'se', 'ta', 'ti', 'to', 'tu', 'te',
]);

/**
 * Combined bigram set for all supported languages
 */
export const ALL_BIGRAMS = new Set([
  ...BIGRAMS_EN, ...BIGRAMS_ES, ...BIGRAMS_PT, ...BIGRAMS_FR,
  ...BIGRAMS_DE, ...BIGRAMS_IT, ...BIGRAMS_NL, ...BIGRAMS_PL,
  ...BIGRAMS_SV, ...BIGRAMS_TR, ...BIGRAMS_ID, ...BIGRAMS_VI,
  ...BIGRAMS_RU, ...BIGRAMS_AR, ...BIGRAMS_FA, ...BIGRAMS_HI,
  ...BIGRAMS_JA, ...BIGRAMS_KO, ...BIGRAMS_ZH, ...BIGRAMS_TH,
]);

/**
 * Get bigrams for a specific language
 */
export function getBigrams(lang: LanguageCode): Set<string> {
  const bigramMap: Record<LanguageCode, Set<string>> = {
    en: BIGRAMS_EN,
    es: BIGRAMS_ES,
    pt: BIGRAMS_PT,
    fr: BIGRAMS_FR,
    de: BIGRAMS_DE,
    it: BIGRAMS_IT,
    nl: BIGRAMS_NL,
    pl: BIGRAMS_PL,
    sv: BIGRAMS_SV,
    tr: BIGRAMS_TR,
    id: BIGRAMS_ID,
    vi: BIGRAMS_VI,
    ru: BIGRAMS_RU,
    ar: BIGRAMS_AR,
    fa: BIGRAMS_FA,
    hi: BIGRAMS_HI,
    ja: BIGRAMS_JA,
    ko: BIGRAMS_KO,
    zh: BIGRAMS_ZH,
    th: BIGRAMS_TH,
  };
  return bigramMap[lang] || BIGRAMS_EN;
}

