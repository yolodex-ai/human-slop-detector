#!/usr/bin/env node
import { detect } from './index';

const input = process.argv.slice(2).join(' ');

if (!input) {
  console.log('Usage: npx human-slop-detector <text>');
  console.log('Example: npx human-slop-detector asdfghjkl');
  process.exit(1);
}

const result = detect(input);

console.log(JSON.stringify({
  input,
  isSlop: result.isSlop,
  isKeysmash: result.isKeysmash,
  isGibberish: result.isGibberish,
  isLikelyHuman: result.isLikelyHuman,
  confidence: result.confidence,
}, null, 2));

