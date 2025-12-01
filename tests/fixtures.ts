/**
 * Test fixtures for keysmash detection
 * 100+ keysmash examples and 100+ non-keysmash examples
 *
 * Real-world keysmash examples sourced from:
 * - Social media (Tumblr, Twitter, Reddit)
 * - Linguistic studies on digital communication
 * - Common patterns observed in online communities
 */

// =============================================================================
// KEYSMASH EXAMPLES (120 total)
// Real-world patterns from social media and online communities
// =============================================================================

export const keysmashExamples = [
  // Classic home row smashes (most common in the wild)
  "asdfghjkl",
  "asdfgh",
  "sdfghjkl",
  "asdfasdf",
  "asdfjkl",
  "asdfghjkla",
  "sdfghj",
  "dfghjk",
  "fghjkl",
  "ghjkl",
  "hjkl",
  "asdffghjkl",
  "asdfghjklasdf",
  "sdfghjklsdfgh",
  "asdfasdfasdf",

  // Real Tumblr/Twitter style keysmashes (chaotic, home-row heavy)
  "asjkdfhaskjdfh",
  "skdjfhskjdfh",
  "aslkdjfhalskdjfh",
  "kajsdhfkajsdhf",
  "alskdjfhalskdjf",
  "dkfjahsdkfjah",
  "askdjfhaskdjfh",
  "laskdjflaskdjf",
  "ajskhdfajskhdf",
  "dkjfhsdkjfhs",
  "slakdjfslakdjf",
  "jashdfkjashdf",
  "aksjdhfaksjdhf",
  "sdkjfhsdkjfh",
  "alksjdflaksjdf",

  // Longer chaotic smashes (very common online)
  "asjglgjjggskaldhkakakdhh",
  "agafsjdkajshdfkajshdf",
  "skdjfhgskdjfhgskdjfhg",
  "alskdjfhalskdjfhalskdjfh",
  "kajsdhfkajsdhfkajsdhf",
  "dkfjahsdkfjahsdkfjah",
  "jkasdhfjkasdhfjkasdh",
  "slakdjfslakdjfslakdjf",
  "askjdhfaskjdhfaskjdhf",
  "lkajshdflkajshdflkajshdf",

  // Left hand dominant smashes
  "asdfasdfasdf",
  "sdfgsdfgsdfg",
  "asdfqweasdf",
  "asdfzxcvasdf",
  "sdfgasdf",
  "dfghsdfg",
  "qweasdf",
  "asdfqwe",
  "sdfgqwe",
  "asdfzxcv",

  // Right hand dominant smashes
  "hjklhjklhjkl",
  "ghjklghjkl",
  "jklhjklhjkl",
  "ghjkghjk",
  "jkljkljkl",
  "klhjklhjkl",
  "hjklhjkl",
  "ghjklhjkl",
  "jklghjkl",
  "hjkghjkl",

  // Mixed hand chaos (authentic feel)
  "asdfjklasdfjkl",
  "ghjkasdfghjk",
  "sdfghjklasdf",
  "jklasdjklasdjkl",
  "fghjklfghjkl",
  "asdfhjklasdf",
  "ghjklasdfghjkl",
  "sdfghjkasdfgh",
  "asdfghjkasdf",
  "hjklasdfhjkl",

  // Mobile/phone keysmash patterns (central keyboard clusters)
  "sksksk",
  "ghghgh",
  "dkdkdk",
  "fjfjfj",
  "ghfjghfj",
  "dkfjdkfj",
  "skdjskdj",
  "fhgjfhgj",
  "djfkdjfk",
  "gkslgksl",

  // Repeated short patterns (common in excited reactions)
  "asdfasdfasdfasdf",
  "jkljkljkljkl",
  "sdfgsdfgsdfgsdfg",
  "ghjkghjkghjkghjk",
  "hjklhjklhjklhjkl",
  "fghjfghjfghjfghj",
  "asdasdasdasd",
  "dfgdfgdfgdfg",
  "jkhjkhjkhjkh",
  "gfhgfhgfhgfh",

  // Gaming patterns (WASD movement keys)
  "wsadwsadwsad",
  "wasdwasdwasd",
  "asdwasdwasdw",

  // Bottom row involved
  "zxcvasdf",
  "xcvbsdfg",
  "cvbndfgh",
  "zxcvzxcv",
  "xcvbxcvb",
  "zxcvasdfzxcv",
  "asdfzxcvasdf",
  "sdfgxcvbsdfg",
  "cvbnmcvbnm",
  "zxcvbnmasdf",

  // With some top row mixed in (home row dominant)
  "qwertasdfgh",
  "asdfghjkqwer",
  "qweasdfghjkl",
  "asdfghjklqwe",
  "sdfghjklwer",
  "fghjkluio",
  "asdfgqwer",
  "hjklpoiu",
  "ghjklyui",
  "asdfghjkler",
];

// =============================================================================
// NON-KEYSMASH EXAMPLES (115 total)
// Real words, names, email patterns, technical terms
// =============================================================================

export const nonKeysmashExamples = [
  // Common English words
  "hello",
  "world",
  "testing",
  "example",
  "computer",
  "keyboard",
  "programming",
  "software",
  "development",
  "application",
  "javascript",
  "typescript",
  "function",
  "variable",
  "constant",
  "beautiful",
  "wonderful",
  "fantastic",
  "incredible",
  "amazing",

  // Real names (first names)
  "michael",
  "jennifer",
  "christopher",
  "elizabeth",
  "alexander",
  "stephanie",
  "jonathan",
  "katherine",
  "nicholas",
  "samantha",
  "matthew",
  "victoria",
  "benjamin",
  "margaret",
  "patricia",
  "sebastian",
  "anastasia",
  "nathaniel",
  "gabriella",
  "maximilian",

  // Email local parts (realistic patterns)
  "john.doe",
  "jane_smith",
  "bob123",
  "alice2024",
  "user.name",
  "first.last",
  "contact_us",
  "support123",
  "info2024",
  "admin_user",
  "test.account",
  "demo_user",
  "sales.team",
  "marketing",
  "developer01",

  // Technical terms
  "config",
  "setup",
  "admin",
  "database",
  "server",
  "client",
  "network",
  "protocol",
  "interface",
  "module",
  "package",
  "library",
  "framework",
  "component",
  "service",

  // Common nouns
  "pizza",
  "music",
  "beach",
  "mountain",
  "river",
  "forest",
  "sunset",
  "garden",
  "castle",
  "bridge",
  "coffee",
  "chocolate",
  "vanilla",
  "strawberry",
  "blueberry",

  // Brand/company names
  "google",
  "amazon",
  "microsoft",
  "apple",
  "netflix",
  "spotify",
  "twitter",
  "facebook",
  "instagram",
  "linkedin",

  // Alphanumeric usernames
  "user2024",
  "test123",
  "demo456",
  "account789",
  "project01",
  "version20",
  "release15",
  "update99",
  "patch42",
  "build100",

  // Acronyms and abbreviations
  "nasa",
  "nato",
  "wifi",
  "html",
  "json",
  "yaml",
  "http",
  "smtp",
  "imap",
  "sftp",

  // Words with adjacent letters (tricky but valid)
  "western",
  "restore",
  "freedom",
  "treated",
  "greeting",
  "sweater",
  "starter",
  "greater",
  "poultry",
  "industry",
];

// =============================================================================
// EMAIL TEST CASES
// =============================================================================

export const validEmails = [
  "john.doe@gmail.com",
  "jane_smith@yahoo.com",
  "bob123@hotmail.com",
  "alice.wonderland@outlook.com",
  "support@company.org",
  "contact_us@business.net",
  "first.last.name@domain.co.uk",
  "developer123@tech.io",
  "sales.team@startup.com",
  "info2024@newsletter.org",
];

export const keysmashEmails = [
  "asdfghjkl@gmail.com",
  "skdjfhskjdfh@yahoo.com",
  "asjkdfhaskjdfh@hotmail.com",
  "kajsdhfkajsdhf@outlook.com",
  "asdfasdfasdf@domain.com",
  "jkljkljkl@test.org",
  "hjklhjklhjkl@mail.net",
  "sdfghjklsdfg@example.com",
  "fghjklfghjkl@web.io",
  "aslkdjfhalskd@site.co",
];

// =============================================================================
// EDGE CASES
// =============================================================================

export const edgeCases = {
  // Very short strings (ambiguous by nature)
  shortStrings: ["a", "ab", "abc", "hi", "ok", "no", "yes"],

  // Single repeated character
  repeatedChars: ["aaaa", "ssss", "dddd", "ffff", "jjjj", "kkkk"],

  // Numbers only
  numbersOnly: ["123456", "987654", "111111", "246810", "135792"],

  // Special characters
  specialChars: ["!@#$%", "***", "...", "---", "___"],

  // Mixed content
  mixedContent: ["hello123", "test!@#", "user_name", "first.last", "a1b2c3"],

  // Spaces included
  withSpaces: ["hello world", "test string", "asdf jkl", "qwer tyui"],
};
