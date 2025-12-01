import * as fs from 'fs';

interface Metrics {
  tp: number;  // true positives
  fp: number;  // false positives
  tn: number;  // true negatives
  fn: number;  // false negatives
  precision: number;
  recall: number;
  f1: number;
  accuracy: number;
}

function calculateMetrics(predictions: boolean[], groundTruth: boolean[]): Metrics {
  let tp = 0, fp = 0, tn = 0, fn = 0;
  
  for (let i = 0; i < predictions.length; i++) {
    if (predictions[i] && groundTruth[i]) tp++;
    else if (predictions[i] && !groundTruth[i]) fp++;
    else if (!predictions[i] && !groundTruth[i]) tn++;
    else if (!predictions[i] && groundTruth[i]) fn++;
  }
  
  const precision = tp / (tp + fp) || 0;
  const recall = tp / (tp + fn) || 0;
  const f1 = 2 * (precision * recall) / (precision + recall) || 0;
  const accuracy = (tp + tn) / (tp + fp + tn + fn);
  
  return { tp, fp, tn, fn, precision, recall, f1, accuracy };
}

// Read CSV
const csv = fs.readFileSync('tests/human-model-vs-ai.csv', 'utf-8');
const lines = csv.trim().split('\n').slice(1); // skip header

const gptPredictions: boolean[] = [];
const libraryPredictions: boolean[] = [];
const humanLabels: boolean[] = [];

for (const line of lines) {
  // Handle CSV with possible quoted strings
  const match = line.match(/^(".*?"|[^,]*),([^,]*),([^,]*),([^,]*)$/);
  if (!match) continue;
  
  const [, , gpt, lib, human] = match;
  gptPredictions.push(gpt.trim().toUpperCase() === 'TRUE');
  libraryPredictions.push(lib.trim().toUpperCase() === 'TRUE');
  humanLabels.push(human.trim().toUpperCase() === 'TRUE');
}

const gptMetrics = calculateMetrics(gptPredictions, humanLabels);
const libMetrics = calculateMetrics(libraryPredictions, humanLabels);

const fmt = (n: number) => (n * 100).toFixed(1) + '%';

console.log(`## benchmark results\n`);
console.log(`tested against ${humanLabels.length} real-world examples with human-labeled ground truth:\n`);
console.log(`| metric | gpt-4.1 | human-slop-detector |`);
console.log(`|--------|---------|---------------------|`);
console.log(`| precision | ${fmt(gptMetrics.precision)} | ${fmt(libMetrics.precision)} |`);
console.log(`| recall | ${fmt(gptMetrics.recall)} | ${fmt(libMetrics.recall)} |`);
console.log(`| f1 score | ${fmt(gptMetrics.f1)} | ${fmt(libMetrics.f1)} |`);
console.log(`| accuracy | ${fmt(gptMetrics.accuracy)} | ${fmt(libMetrics.accuracy)} |`);
console.log(`\n_ground truth: what a human (me) thinks is human slop_`);

// Debug info
console.log(`\n### detailed breakdown\n`);
console.log(`**gpt-4.1:** ${gptMetrics.tp} TP, ${gptMetrics.fp} FP, ${gptMetrics.tn} TN, ${gptMetrics.fn} FN`);
console.log(`**library:** ${libMetrics.tp} TP, ${libMetrics.fp} FP, ${libMetrics.tn} TN, ${libMetrics.fn} FN`);

