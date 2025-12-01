/**
 * Real-world test fixtures for human slop detection
 * 
 * These examples are based on common patterns seen in:
 * - Twitter/X emotional reactions
 * - Reddit usernames and comments
 * - GitHub issue spam
 * - Signup form abuse
 * - API abuse patterns
 * - Email address generators
 */

export interface RealWorldTestCase {
  input: string;
  source: string;
  expectedSlop: boolean;
  expectedHuman: boolean;
  description: string;
}

// =============================================================================
// TWITTER/X STYLE KEYSMASHES
// Emotional reactions people type when excited, upset, or overwhelmed
// =============================================================================
export const twitterKeysmashes: RealWorldTestCase[] = [
  { input: 'asdkjfhaskjdfh', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'excitement keysmash' },
  { input: 'SKDJFHSKDJFH', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'caps excitement' },
  { input: 'laskdjflaskdjf', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'fandom reaction' },
  { input: 'asjglgjjggskaldhh', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'chaotic smash' },
  { input: 'ghjkghjkghjk', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'repeated pattern' },
  { input: 'asdfghjkl', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'classic home row' },
  { input: 'zxcvbnm', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'bottom row' },
  { input: 'fghjklfghjkl', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'right hand smash' },
  { input: 'asdfasdfasdf', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'left hand repeated' },
  { input: 'sksksksksk', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'vsco girl keysmash' },
  { input: 'alksjdflaksjdf', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'tumblr style' },
  { input: 'kajsdhfkajsdhf', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'kpop fan reaction' },
  { input: 'dkfjahsdkfjah', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'excitement burst' },
  { input: 'ghfjghfjghfj', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'mobile keysmash' },
  { input: 'sdfghjklsdfgh', source: 'twitter', expectedSlop: true, expectedHuman: true, description: 'home row extended' },
];

// =============================================================================
// LEGITIMATE TWITTER CONTENT
// Real usernames, handles, hashtags that should NOT be flagged
// =============================================================================
export const twitterLegitimate: RealWorldTestCase[] = [
  { input: 'javascript', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'tech hashtag' },
  { input: 'elonmusk', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'username' },
  { input: 'breaking', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'news tag' },
  { input: 'developers', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'community' },
  { input: 'photography', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'hobby tag' },
  { input: 'musicproducer', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'profession' },
  { input: 'gamedev', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'industry tag' },
  { input: 'frontend', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'tech term' },
  { input: 'backend', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'tech term' },
  { input: 'startup', source: 'twitter', expectedSlop: false, expectedHuman: false, description: 'business' },
];

// =============================================================================
// REDDIT STYLE GIBBERISH
// Throwaway accounts, spam comments, test posts
// =============================================================================
export const redditGibberish: RealWorldTestCase[] = [
  { input: 'throwaway123', source: 'reddit', expectedSlop: false, expectedHuman: false, description: 'throwaway account' },
  { input: 'cooluser99', source: 'reddit', expectedSlop: false, expectedHuman: false, description: 'normal username' },
  { input: 'catslover', source: 'reddit', expectedSlop: false, expectedHuman: false, description: 'meme username' },
  { input: 'deleted', source: 'reddit', expectedSlop: false, expectedHuman: false, description: 'deleted account' },
  { input: 'testaccount', source: 'reddit', expectedSlop: false, expectedHuman: false, description: 'test account' },
  { input: 'aaaaaaaaaaaa', source: 'reddit', expectedSlop: true, expectedHuman: true, description: 'spam comment' },
  { input: 'hjkhjkhjkhjk', source: 'reddit', expectedSlop: true, expectedHuman: true, description: 'spam keysmash' },
  { input: 'sdfgsdfgsdfg', source: 'reddit', expectedSlop: true, expectedHuman: true, description: 'test spam' },
  { input: 'fghjfghjfghj', source: 'reddit', expectedSlop: true, expectedHuman: true, description: 'lazy test input' },
  { input: 'asdasdasdasd', source: 'reddit', expectedSlop: true, expectedHuman: true, description: 'repeated keysmash' },
];

// =============================================================================
// GITHUB ISSUE/PR SPAM
// Automated spam, test issues, placeholder text
// =============================================================================
export const githubSpam: RealWorldTestCase[] = [
  { input: 'test', source: 'github', expectedSlop: false, expectedHuman: false, description: 'common test word' },
  { input: 'asdf', source: 'github', expectedSlop: true, expectedHuman: true, description: 'lazy placeholder' },
  { input: 'fixbug', source: 'github', expectedSlop: false, expectedHuman: false, description: 'commit prefix' },
  { input: 'wip', source: 'github', expectedSlop: false, expectedHuman: false, description: 'work in progress' },
  { input: 'todo', source: 'github', expectedSlop: false, expectedHuman: false, description: 'todo marker' },
  { input: 'zzzzzzzzz', source: 'github', expectedSlop: true, expectedHuman: true, description: 'z-fill spam' },
  { input: 'xxxxxxxxx', source: 'github', expectedSlop: true, expectedHuman: true, description: 'x-fill spam' },
  { input: 'placeholder123', source: 'github', expectedSlop: false, expectedHuman: false, description: 'placeholder text' },
  { input: 'temptemp', source: 'github', expectedSlop: false, expectedHuman: false, description: 'temp naming' },
  { input: 'foobar', source: 'github', expectedSlop: false, expectedHuman: false, description: 'metasyntactic var' },
];

// =============================================================================
// SIGNUP FORM ABUSE
// Common patterns from fake/spam signups
// =============================================================================
export const signupAbuse: RealWorldTestCase[] = [
  { input: 'asdf@asdf.com', source: 'signup', expectedSlop: true, expectedHuman: true, description: 'keysmash email' },
  { input: 'test@test.com', source: 'signup', expectedSlop: false, expectedHuman: false, description: 'test email' },
  { input: 'asdfjkl@gmail.com', source: 'signup', expectedSlop: true, expectedHuman: true, description: 'home row email' },
  { input: 'asdfgh@yahoo.com', source: 'signup', expectedSlop: true, expectedHuman: true, description: 'home row email' },
  { input: 'john.doe@gmail.com', source: 'signup', expectedSlop: false, expectedHuman: false, description: 'real email pattern' },
  { input: 'xjkd82hf@temp.com', source: 'signup', expectedSlop: true, expectedHuman: false, description: 'random gibberish email' },
  { input: 'user12345@mail.com', source: 'signup', expectedSlop: false, expectedHuman: false, description: 'numbered user' },
  { input: 'sdfghjk@sdfgh.com', source: 'signup', expectedSlop: true, expectedHuman: true, description: 'both parts keysmash' },
  { input: 'contact@business.org', source: 'signup', expectedSlop: false, expectedHuman: false, description: 'business email' },
  { input: 'hjd28ebsgis@gmail.com', source: 'signup', expectedSlop: true, expectedHuman: false, description: 'gibberish local part' },
];

// =============================================================================
// API ABUSE PATTERNS
// Common inputs from API testing/abuse
// =============================================================================
export const apiAbuse: RealWorldTestCase[] = [
  { input: '"><script>alert(1)</script>', source: 'api', expectedSlop: false, expectedHuman: false, description: 'xss attempt' },
  { input: "'; DROP TABLE users;--", source: 'api', expectedSlop: false, expectedHuman: false, description: 'sql injection' },
  { input: 'aaaaaaaaaaaaaaaaaaaaa', source: 'api', expectedSlop: true, expectedHuman: true, description: 'single char spam' },
  { input: '123456789012345678901', source: 'api', expectedSlop: false, expectedHuman: false, description: 'number sequence' },
  { input: 'nullnullnullnull', source: 'api', expectedSlop: false, expectedHuman: false, description: 'null spam' },
  { input: 'undefinedundefined', source: 'api', expectedSlop: false, expectedHuman: false, description: 'undefined spam' },
  { input: 'truetruetrueture', source: 'api', expectedSlop: false, expectedHuman: false, description: 'boolean spam' },
  { input: 'asdfasdfasdfasdf', source: 'api', expectedSlop: true, expectedHuman: true, description: 'keysmash spam' },
  { input: 'testingtesting123', source: 'api', expectedSlop: false, expectedHuman: false, description: 'test string' },
  { input: 'xkjqzmvpwb', source: 'api', expectedSlop: true, expectedHuman: false, description: 'random chars' },
];

// =============================================================================
// GIBBERISH SENTENCES
// Full sentences of human slop
// =============================================================================
export const gibberishSentences: RealWorldTestCase[] = [
  { input: 'asdf jkl qwerty hjkl', source: 'sentence', expectedSlop: true, expectedHuman: true, description: 'keysmash sentence' },
  { input: 'the quick brown fox jumps', source: 'sentence', expectedSlop: false, expectedHuman: false, description: 'pangram start' },
  { input: 'hello world this is a test', source: 'sentence', expectedSlop: false, expectedHuman: false, description: 'normal sentence' },
  { input: 'asdfgh qwerty zxcvb poiuy', source: 'sentence', expectedSlop: true, expectedHuman: true, description: 'all keysmash words' },
  { input: 'lorem ipsum dolor sit amet', source: 'sentence', expectedSlop: false, expectedHuman: false, description: 'lorem ipsum' },
  { input: 'xkcd qwfp gjluy zxnm bvcx', source: 'sentence', expectedSlop: true, expectedHuman: false, description: 'random gibberish' },
  { input: 'please help asdfghjkl broken', source: 'sentence', expectedSlop: false, expectedHuman: false, description: 'mixed with keysmash' },
  { input: 'asjkdfh laskdjf kajsdhf dkfj', source: 'sentence', expectedSlop: true, expectedHuman: true, description: 'tumblr excitement' },
  { input: 'contact us for more information', source: 'sentence', expectedSlop: false, expectedHuman: false, description: 'business text' },
  { input: 'hjkl hjkl hjkl hjkl hjkl', source: 'sentence', expectedSlop: true, expectedHuman: true, description: 'repeated keysmash' },
];

// =============================================================================
// EDGE CASES
// Tricky inputs that test the boundaries
// =============================================================================
export const edgeCases: RealWorldTestCase[] = [
  { input: 'admin', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'root', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'system user' },
  { input: 'password', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'username', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'email', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'login', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'signup', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'register', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'account', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'profile', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'settings', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'dashboard', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'welcome', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'contact', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
  { input: 'support', source: 'edge', expectedSlop: false, expectedHuman: false, description: 'common word' },
];

// =============================================================================
// INTERNATIONAL LEGITIMATE
// Real words/names from various languages that shouldn't be flagged
// =============================================================================
export const internationalLegitimate: RealWorldTestCase[] = [
  { input: 'nguyen', source: 'international', expectedSlop: false, expectedHuman: false, description: 'vietnamese name' },
  { input: 'zhang', source: 'international', expectedSlop: false, expectedHuman: false, description: 'chinese name' },
  { input: 'mueller', source: 'international', expectedSlop: false, expectedHuman: false, description: 'german name' },
  { input: 'bjork', source: 'international', expectedSlop: false, expectedHuman: false, description: 'icelandic name' },
  { input: 'krzyzewski', source: 'international', expectedSlop: false, expectedHuman: false, description: 'polish name' },
  { input: 'tchaikovsky', source: 'international', expectedSlop: false, expectedHuman: false, description: 'russian name' },
  { input: 'schwarzenegger', source: 'international', expectedSlop: false, expectedHuman: false, description: 'austrian name' },
  { input: 'xing', source: 'international', expectedSlop: false, expectedHuman: false, description: 'chinese name' },
  { input: 'patel', source: 'international', expectedSlop: false, expectedHuman: false, description: 'indian name' },
  { input: 'nakamura', source: 'international', expectedSlop: false, expectedHuman: false, description: 'japanese name' },
];

// Combine all test cases for easy access
export const allRealWorldTests: RealWorldTestCase[] = [
  ...twitterKeysmashes,
  ...twitterLegitimate,
  ...redditGibberish,
  ...githubSpam,
  ...signupAbuse,
  ...apiAbuse,
  ...gibberishSentences,
  ...edgeCases,
  ...internationalLegitimate,
];

// Summary counts
export const testSummary = {
  total: allRealWorldTests.length,
  expectedSlop: allRealWorldTests.filter(t => t.expectedSlop).length,
  expectedClean: allRealWorldTests.filter(t => !t.expectedSlop).length,
  expectedHuman: allRealWorldTests.filter(t => t.expectedHuman).length,
  bySource: {
    twitter: twitterKeysmashes.length + twitterLegitimate.length,
    reddit: redditGibberish.length,
    github: githubSpam.length,
    signup: signupAbuse.length,
    api: apiAbuse.length,
    sentence: gibberishSentences.length,
    edge: edgeCases.length,
    international: internationalLegitimate.length,
  },
};

