/**
 * Multilingual test fixtures for gibberish detection
 * 10 gibberish and 10 non-gibberish examples for each of the top 20 languages online
 */

export interface LanguageFixtures {
  code: string;
  name: string;
  validWords: string[];      // Real words/phrases (not gibberish)
  gibberish: string[];       // Random gibberish strings
}

export const multilingualFixtures: LanguageFixtures[] = [
  // English
  {
    code: 'en',
    name: 'English',
    validWords: [
      'hello', 'world', 'computer', 'beautiful', 'extraordinary',
      'magnificent', 'international', 'understanding', 'development', 'application',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Chinese (Pinyin romanized)
  {
    code: 'zh',
    name: 'Chinese',
    validWords: [
      'nihao', 'xièxie', 'zhongguo', 'beijing', 'shanghai',
      'pengyou', 'gongzuo', 'xuéxí', 'jiating', 'meiyou',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Spanish
  {
    code: 'es',
    name: 'Spanish',
    validWords: [
      'hola', 'gracias', 'buenos', 'amigo', 'trabajo',
      'familia', 'hermoso', 'importante', 'comunidad', 'universidad',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Arabic (Romanized)
  {
    code: 'ar',
    name: 'Arabic',
    validWords: [
      'marhaba', 'shukran', 'habibi', 'inshallah', 'salaam',
      'ahlan', 'mabrook', 'khalas', 'yalla', 'wallah',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Portuguese
  {
    code: 'pt',
    name: 'Portuguese',
    validWords: [
      'obrigado', 'bonito', 'trabalho', 'familia', 'amizade',
      'saudade', 'brasileiro', 'comunidade', 'importante', 'felicidade',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Indonesian
  {
    code: 'id',
    name: 'Indonesian',
    validWords: [
      'terima', 'kasih', 'selamat', 'pagi', 'indonesia',
      'bagus', 'cantik', 'makanan', 'bersama', 'keluarga',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // French
  {
    code: 'fr',
    name: 'French',
    validWords: [
      'bonjour', 'merci', 'beaucoup', 'famille', 'amour',
      'travail', 'magnifique', 'important', 'communaute', 'restaurant',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Japanese (Romanized)
  {
    code: 'ja',
    name: 'Japanese',
    validWords: [
      'konnichiwa', 'arigatou', 'sayonara', 'kawaii', 'oishii',
      'sugoi', 'watashi', 'tomodachi', 'nihongo', 'genki',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Russian (Romanized)
  {
    code: 'ru',
    name: 'Russian',
    validWords: [
      'privet', 'spasibo', 'khorosho', 'rabota', 'druzya',
      'lyubov', 'moskva', 'rossiya', 'zdorovo', 'krasivo',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // German
  {
    code: 'de',
    name: 'German',
    validWords: [
      'guten', 'morgen', 'danke', 'bitte', 'freundschaft',
      'wunderbar', 'gesundheit', 'arbeit', 'schmetterling', 'kindergarten',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Korean (Romanized)
  {
    code: 'ko',
    name: 'Korean',
    validWords: [
      'annyeong', 'kamsahamnida', 'saranghae', 'hanguk', 'seoul',
      'kimchi', 'bulgogi', 'oppa', 'chingu', 'jeongmal',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Italian
  {
    code: 'it',
    name: 'Italian',
    validWords: [
      'ciao', 'grazie', 'prego', 'amore', 'bella',
      'famiglia', 'buongiorno', 'arrivederci', 'magnifico', 'fantastico',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Turkish
  {
    code: 'tr',
    name: 'Turkish',
    validWords: [
      'merhaba', 'tesekkur', 'gunaydın', 'turkiye', 'istanbul',
      'guzel', 'arkadas', 'sevgi', 'mutlu', 'hayat',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Vietnamese (Romanized without diacritics)
  {
    code: 'vi',
    name: 'Vietnamese',
    validWords: [
      'xin', 'chao', 'vietnam', 'hanoi', 'saigon',
      'pho', 'banh', 'trung', 'nguyen', 'tran',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Polish
  {
    code: 'pl',
    name: 'Polish',
    validWords: [
      'dziekuje', 'przepraszam', 'polska', 'warszawa', 'krakow',
      'przyjaciel', 'rodzina', 'milosc', 'piekny', 'dziendobry',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Dutch
  {
    code: 'nl',
    name: 'Dutch',
    validWords: [
      'hallo', 'dankjewel', 'alsjeblieft', 'nederland', 'amsterdam',
      'gezellig', 'vriendschap', 'familie', 'mooi', 'lekker',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Thai (Romanized)
  {
    code: 'th',
    name: 'Thai',
    validWords: [
      'sawadee', 'khopkhun', 'sabaidee', 'thailand', 'bangkok',
      'aroi', 'suay', 'sanuk', 'khrap', 'chai',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Hindi (Romanized)
  {
    code: 'hi',
    name: 'Hindi',
    validWords: [
      'namaste', 'dhanyavaad', 'bahut', 'acha', 'pyaar',
      'dost', 'khaana', 'paani', 'sundar', 'bharath',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Persian/Farsi (Romanized)
  {
    code: 'fa',
    name: 'Persian',
    validWords: [
      'salam', 'mersi', 'khoda', 'iran', 'tehran',
      'aziz', 'khoshgel', 'doost', 'mamnoon', 'bebakhshid',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },

  // Swedish
  {
    code: 'sv',
    name: 'Swedish',
    validWords: [
      'hej', 'tack', 'vacker', 'familj', 'karlek',
      'vanner', 'stockholm', 'sverige', 'lagom', 'fika',
    ],
    gibberish: [
      'xkjqzp', 'bvmwxr', 'fghxzq', 'jkxvbn', 'qwxzpl',
      'mkjxzv', 'bxzqwp', 'xvbnmz', 'qzxjkv', 'wbxzqm',
    ],
  },
];

/**
 * Universal gibberish patterns that should be detected regardless of language
 * These are combinations that don't appear in any major language
 */
export const universalGibberish = [
  'xkjqzpmw',
  'bvnxzqwr',
  'fghxzqpl',
  'jkxvbnmz',
  'qwxzplkj',
  'mkjxzvbn',
  'bxzqwpmk',
  'xvbnmzqw',
  'qzxjkvbn',
  'wbxzqmpl',
  'fxzjqkvm',
  'pxzqwkjm',
  'zxqwkjpm',
  'xqzwkpjm',
  'kxzqwjpm',
];

/**
 * Strings that look like gibberish but are valid words in some language
 * These should NOT be flagged as gibberish
 * (Excludes extreme edge cases like "rhythms" which genuinely look like gibberish)
 */
export const falsePositiveGibberish = [
  'czech',     // English word that looks strange
  'fjord',     // Norwegian/English
  'gnocchi',   // Italian food
  'tsukimi',   // Japanese
  'nghe',      // Vietnamese
  'nguyen',    // Vietnamese name
  'through',   // English
  'knight',    // English
  'enough',    // English
  'thought',   // English
];

