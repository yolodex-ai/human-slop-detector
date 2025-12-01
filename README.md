# human-slop-detector

we talk a lot about ai slop these days. but you know what nobody talks about? **humans**. sloppy, keyboard-mashing, form-spamming _humans_.

i still get humans slopping all over my signup forms. hammering my apis with `asdfghjkl`. registering with `qwerty@fghjkl.com`.

this library aims to detect the most egregious human slop so you can protect your expensive ai powered services from the chaos we humans like to bring to them.

## install

```bash
npm install human-slop-detector
```

## usage

```typescript
import { detect, detectSentence } from "human-slop-detector";

// detect single strings
detect("asdfghjkl");
// => { isSlop: true, isKeysmash: true, isLikelyHuman: true, confidence: 0.98 }

detect("hello world");
// => { isSlop: false, isKeysmash: false, isLikelyHuman: false, confidence: 0.12 }

// detect whole sentences of slop
detectSentence("asdf jkl qwerty hjkl");
// => { isSlop: true, slopPercentage: 0.8, isLikelyHuman: true }

// even catches sneaky email slop
detect("asdf@jkl.com");
// => { isSlop: true, isKeysmash: true, isLikelyHuman: true }
```

## what it detects

| type          | example          | human?         | description                  |
| ------------- | ---------------- | -------------- | ---------------------------- |
| **keysmash**  | `asdfghjkl`      | ✓ yes          | home row keyboard mashing    |
| **keysmash**  | `qwertyuiop`     | ✓ yes          | enthusiastic jazz pianist    |
| **keysmash**  | `asjkdfhaskjdfh` | ✓ yes          | very anrgy human             |
| **gibberish** | `xkjqzpmw`       | ✗ probably bot | random unpronounceable chars |
| **repeated**  | `wsadwsadwsad`   | ✓ yes          | i'm playing counter-strike   |

## real-world test results

we tested against like 100 real-world examples from twitter, reddit, github and signup forms:

| metric | gpt-4.1 | human-slop-detector |
|--------|---------|---------------------|
| precision | 88.9% | 97.0% |
| recall | 24.2% | 97.0% |
| f1 score | 38.1% | 97.0% |
| accuracy | 74.0% | 98.0% |

_ground truth: what a human (me) thinks is human slop. run `npx tsx scripts/benchmark.ts` to regenerate._

**want to help?** we need more keysmashes from the wild to improve coverage, [open keysmashes.txt and smash your keyboard](https://github.com/yolodex-ai/human-slop-detector/edit/main/keysmashes.txt) - one per line, no questions asked.

## api

### `detect(input, options?)`

```typescript
const result = detect("asdfghjkl");

result.isSlop; // true - it's slop (keysmash OR gibberish)
result.isKeysmash; // true - keyboard-based pattern
result.isGibberish; // false - not random gibberish
result.isLikelyHuman; // true - probably a frustrated human
result.confidence; // 0.98 - very confident
result.gibberishConfidence; // 0.76 - also looks gibberish-y
```

### `detectSentence(input, options?)`

```typescript
const result = detectSentence("asdf jkl qwerty hjkl");

result.isSlop; // true
result.slopPercentage; // 0.8 - 80% of words are slop
result.slopWordCount; // 4
result.totalWords; // 5
result.words; // per-word breakdown
```

### options

```typescript
detect("qwerty", {
  layout: "dvorak", // keyboard layout for analysis
  threshold: 0.6, // confidence threshold (default: 0.5)
});
```

## supported keyboard layouts

because apparently not everyone uses qwerty (looking at you, dvorak enthusiasts):

- **qwerty** - the og, the classic, the one true layout (default)
- **azerty** - bonjour mon amis
- **qwertz** - german efficiency
- **dvorak** - for the enlightened few
- **colemak** - the new hotness

## supported languages

gibberish detection uses bigrams from **20 languages** so we don't accidentally flag legitimate words:

english, chinese (pinyin), spanish, arabic, portuguese, indonesian, french, japanese (romaji), russian, german, korean, italian, turkish, vietnamese, polish, dutch, thai, hindi, persian, swedish

## how it works

**keysmash detection** looks for keyboard-based patterns:

- key proximity (adjacent keys = sus)
- home row concentration (asdfghjkl gang)
- keyboard walk patterns (qwerty, zxcvbn)
- hand clustering (one hand mashing)
- limited vowel diversity (only 'a' because it's on the home row)

**gibberish detection** looks for unpronounceable chaos:

- uncommon letter combinations across 20 languages
- excessive consonant clusters (xkjqzp is not a word)
- abnormal vowel patterns

**human detection** distinguishes keyboard mashing from random generation:

- humans hit adjacent keys
- humans favor the home row (lazy fingers)
- bots generate uniformly random garbage

## contributing

i've added a few test cases, keyboards and languagues, please add more.

## why "human slop"?

because "keysmash-detector" was boring and i used to work somwhere where the all function names in our codebase were keysmashes, long before claude started coding.

## license

mit - do whatever you want with it
