const fs = require('fs');
const { detect } = require('human-slop-detector');

const inputFile = process.argv[2] || 'keysmashes.txt';
const file = fs.readFileSync(inputFile, 'utf-8');
const lines = file.split('\n')
  .map(l => l.trim())
  .filter(l => l && !l.startsWith('#'));

if (lines.length === 0) {
  console.log('## 🎹 keysmash detection report\n');
  console.log('no new keysmashes to score!');
  process.exit(0);
}

let detected = 0;
let human = 0;
const results = [];

for (const keysmash of lines) {
  const r = detect(keysmash);
  if (r.isSlop) detected++;
  if (r.isLikelyHumanSlop) human++;
  results.push({ keysmash, ...r });
}

const detectionRate = ((detected / lines.length) * 100).toFixed(1);
const humanRate = ((human / lines.length) * 100).toFixed(1);

console.log(`## 🎹 your keysmash results\n`);
console.log(`| metric | score |`);
console.log(`|--------|-------|`);
console.log(`| keysmashes added | ${lines.length} |`);
console.log(`| detected as slop | ${detected} (${detectionRate}%) |`);
console.log(`| identified as human | ${human} (${humanRate}%) |`);
console.log(`\n### breakdown\n`);
console.log(`| keysmash | slop? | human? | confidence |`);
console.log(`|----------|-------|--------|------------|`);

for (const r of results) {
  const slop = r.isSlop ? '✅' : '❌';
  const hum = r.isLikelyHumanSlop ? '✅' : '➖';
  console.log(`| \`${r.keysmash}\` | ${slop} | ${hum} | ${r.confidence} |`);
}

if (detected < lines.length) {
  console.log(`\n⚠️ ${lines.length - detected} keysmash(es) not detected - we might need to improve the algorithm!`);
}

