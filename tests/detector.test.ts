import { describe, it, expect } from "vitest";
import { detect, detectSentence } from "../src";
import {
  keysmashExamples,
  nonKeysmashExamples,
  validEmails,
  keysmashEmails,
  edgeCases,
} from "./fixtures";

describe("keysmash-detector", () => {
  describe("keysmash detection", () => {
    it("should detect all keysmash examples as keysmashes", () => {
      const results = keysmashExamples.map((example) => ({
        input: example,
        result: detect(example),
      }));

      const detected = results.filter((r) => r.result.isKeysmash);
      const accuracy = detected.length / keysmashExamples.length;

      // Log failures for debugging
      const failures = results.filter((r) => !r.result.isKeysmash);
      if (failures.length > 0) {
        console.log(
          "Keysmash detection failures:",
          failures.slice(0, 10).map((f) => ({
            input: f.input,
            confidence: f.result.confidence,
          }))
        );
      }

      // Expect at least 80% accuracy (some edge cases may be ambiguous)
      expect(accuracy).toBeGreaterThanOrEqual(0.8);
    });

    it("should correctly identify non-keysmash strings", () => {
      const results = nonKeysmashExamples.map((example) => ({
        input: example,
        result: detect(example),
      }));

      const notDetected = results.filter((r) => !r.result.isKeysmash);
      const accuracy = notDetected.length / nonKeysmashExamples.length;

      // Log failures for debugging
      const failures = results.filter((r) => r.result.isKeysmash);
      if (failures.length > 0) {
        console.log(
          "False positive failures:",
          failures.slice(0, 10).map((f) => ({
            input: f.input,
            confidence: f.result.confidence,
          }))
        );
      }

      // Expect at least 85% accuracy
      expect(accuracy).toBeGreaterThanOrEqual(0.85);
    });
  });

  describe("email handling", () => {
    it("should correctly identify valid emails as non-keysmashes", () => {
      const results = validEmails.map((email) => ({
        input: email,
        result: detect(email),
      }));

      const notDetected = results.filter((r) => !r.result.isKeysmash);
      const accuracy = notDetected.length / validEmails.length;

      expect(accuracy).toBeGreaterThanOrEqual(0.9);
    });

    it("should detect keysmash emails", () => {
      const results = keysmashEmails.map((email) => ({
        input: email,
        result: detect(email),
      }));

      // Keysmash emails should still be detectable, though with lower confidence
      const detected = results.filter(
        (r) => r.result.isKeysmash || r.result.confidence > 0.3
      );
      const accuracy = detected.length / keysmashEmails.length;

      expect(accuracy).toBeGreaterThanOrEqual(0.7);
    });
  });

  describe("edge cases", () => {
    it("should handle very short strings", () => {
      edgeCases.shortStrings.forEach((str) => {
        const result = detect(str);
        expect(result).toHaveProperty("isKeysmash");
        expect(result).toHaveProperty("confidence");
        expect(result.confidence).toBeGreaterThanOrEqual(0);
        expect(result.confidence).toBeLessThanOrEqual(1);
      });
    });

    it("should handle empty strings", () => {
      const result = detect("");
      expect(result.isKeysmash).toBe(false);
      expect(result.confidence).toBe(0);
    });

    it("should handle repeated characters", () => {
      edgeCases.repeatedChars.forEach((str) => {
        const result = detect(str);
        expect(result).toHaveProperty("isKeysmash");
        expect(result).toHaveProperty("confidence");
      });
    });

    it("should handle numbers only", () => {
      edgeCases.numbersOnly.forEach((str) => {
        const result = detect(str);
        expect(result).toHaveProperty("isKeysmash");
        expect(result).toHaveProperty("confidence");
      });
    });
  });

  describe("API behavior", () => {
    it("should return confidence between 0 and 1", () => {
      const testCases = [
        ...keysmashExamples.slice(0, 20),
        ...nonKeysmashExamples.slice(0, 20),
      ];

      testCases.forEach((str) => {
        const result = detect(str);
        expect(result.confidence).toBeGreaterThanOrEqual(0);
        expect(result.confidence).toBeLessThanOrEqual(1);
      });
    });

    it("should return factors when available", () => {
      const result = detect("asdfghjkl");
      expect(result.factors).toBeDefined();
      expect(result.factors).toHaveProperty("proximity");
      expect(result.factors).toHaveProperty("homeRow");
      expect(result.factors).toHaveProperty("handClustering");
      expect(result.factors).toHaveProperty("vowelRatio");
      expect(result.factors).toHaveProperty("entropy");
      expect(result.factors).toHaveProperty("keyboardWalk");
      expect(result.factors).toHaveProperty("repetition");
      expect(result.factors).toHaveProperty("sameFinger");
      expect(result.factors).toHaveProperty("homeRowConcentration");
      expect(result.factors).toHaveProperty("limitedVowels");
      expect(result.factors).toHaveProperty("unpronounceable");
      expect(result.factors).toHaveProperty("consonantClusters");
    });

    it("should return gibberish confidence", () => {
      const result = detect("xyzqwkjp");
      expect(result).toHaveProperty("isGibberish");
      expect(result).toHaveProperty("gibberishConfidence");
      expect(result.gibberishConfidence).toBeGreaterThanOrEqual(0);
      expect(result.gibberishConfidence).toBeLessThanOrEqual(1);
    });

    it("should support custom threshold", () => {
      const input = "asdfg";

      const defaultResult = detect(input);
      const highThresholdResult = detect(input, { threshold: 0.9 });
      const lowThresholdResult = detect(input, { threshold: 0.1 });

      // Same confidence, different isKeysmash based on threshold
      expect(highThresholdResult.confidence).toBe(defaultResult.confidence);
      expect(lowThresholdResult.confidence).toBe(defaultResult.confidence);
    });

    it("should support different keyboard layouts", () => {
      const input = "asdfgh";

      const qwertyResult = detect(input, { layout: "qwerty" });
      const dvorakResult = detect(input, { layout: "dvorak" });

      // Results should be defined for both layouts
      expect(qwertyResult.confidence).toBeGreaterThanOrEqual(0);
      expect(dvorakResult.confidence).toBeGreaterThanOrEqual(0);
    });
  });

  describe("specific keysmash patterns", () => {
    it("should detect home row smashes with high confidence", () => {
      const homeRowSmashes = ["asdf", "asdfgh", "hjkl", "asdfghjkl"];

      homeRowSmashes.forEach((str) => {
        const result = detect(str);
        expect(result.confidence).toBeGreaterThan(0.4);
      });
    });

    it("should detect keyboard walks", () => {
      // Home row walks should have higher confidence than top/bottom row
      const homeRowWalks = ["asdfgh", "fghjkl", "lkjhgf"];

      homeRowWalks.forEach((str) => {
        const result = detect(str);
        expect(result.confidence).toBeGreaterThan(0.4);
      });
    });

    it("should not flag common words with adjacent letters", () => {
      const words = ["western", "restore", "freedom", "treated", "greeting"];

      words.forEach((str) => {
        const result = detect(str);
        expect(result.isKeysmash).toBe(false);
      });
    });
  });

  describe("confidence levels", () => {
    it("should have higher confidence for obvious keysmashes", () => {
      const obviousKeysmash = detect("asdfghjklasdfghjkl");
      const ambiguous = detect("hello");

      expect(obviousKeysmash.confidence).toBeGreaterThan(ambiguous.confidence);
    });

    it("should have lower confidence for normal text", () => {
      const normalText = detect("programming");

      expect(normalText.confidence).toBeLessThan(0.5);
      expect(normalText.isKeysmash).toBe(false);
    });
  });

  // Statistical summary test
  describe("overall accuracy", () => {
    it("should achieve good overall accuracy", () => {
      const truePositives = keysmashExamples.filter(
        (ex) => detect(ex).isKeysmash
      ).length;
      const trueNegatives = nonKeysmashExamples.filter(
        (ex) => !detect(ex).isKeysmash
      ).length;

      const totalCorrect = truePositives + trueNegatives;
      const totalExamples =
        keysmashExamples.length + nonKeysmashExamples.length;
      const accuracy = totalCorrect / totalExamples;

      console.log(`Overall accuracy: ${(accuracy * 100).toFixed(1)}%`);
      console.log(
        `True positives: ${truePositives}/${keysmashExamples.length}`
      );
      console.log(
        `True negatives: ${trueNegatives}/${nonKeysmashExamples.length}`
      );

      // Expect at least 80% overall accuracy
      expect(accuracy).toBeGreaterThanOrEqual(0.8);
    });
  });

  describe("multilingual gibberish detection", () => {
    it("should detect universal gibberish patterns", async () => {
      const { universalGibberish } = await import("./multilingual-fixtures");

      universalGibberish.forEach((gibberish) => {
        const result = detect(gibberish);
        expect(result.gibberishConfidence).toBeGreaterThan(0.3);
      });
    });

    it("should not flag valid words from various languages as gibberish", async () => {
      const { multilingualFixtures } = await import("./multilingual-fixtures");

      let totalWords = 0;
      let correctlyIdentified = 0;

      multilingualFixtures.forEach((lang) => {
        lang.validWords.forEach((word) => {
          totalWords++;
          const result = detect(word);
          // Valid words should have low gibberish confidence
          if (result.gibberishConfidence < 0.5) {
            correctlyIdentified++;
          }
        });
      });

      const accuracy = correctlyIdentified / totalWords;
      console.log(
        `Multilingual valid words: ${correctlyIdentified}/${totalWords} (${(
          accuracy * 100
        ).toFixed(1)}%)`
      );
      expect(accuracy).toBeGreaterThanOrEqual(0.8);
    });

    it("should detect gibberish across all languages", async () => {
      const { multilingualFixtures } = await import("./multilingual-fixtures");

      let totalGibberish = 0;
      let detected = 0;

      multilingualFixtures.forEach((lang) => {
        lang.gibberish.forEach((gibberish) => {
          totalGibberish++;
          const result = detect(gibberish);
          if (result.gibberishConfidence >= 0.5 || result.isGibberish) {
            detected++;
          }
        });
      });

      const accuracy = detected / totalGibberish;
      console.log(
        `Multilingual gibberish detection: ${detected}/${totalGibberish} (${(
          accuracy * 100
        ).toFixed(1)}%)`
      );
      expect(accuracy).toBeGreaterThanOrEqual(0.8);
    });

    it("should not flag tricky valid words as gibberish", async () => {
      const { falsePositiveGibberish } = await import(
        "./multilingual-fixtures"
      );

      falsePositiveGibberish.forEach((word) => {
        const result = detect(word);
        // These should NOT be flagged as gibberish (even though they look strange)
        expect(result.isGibberish).toBe(false);
      });
    });
  });

  describe("real-world tests", () => {
    it("should detect slop in real-world examples", async () => {
      const { allRealWorldTests, testSummary } = await import(
        "./realworld-fixtures"
      );

      let correctSlop = 0;
      let correctClean = 0;
      const failures: Array<{
        input: string;
        expected: boolean;
        got: boolean;
      }> = [];

      allRealWorldTests.forEach((test) => {
        const result = detect(test.input);
        const gotSlop = result.isSlop;

        if (test.expectedSlop === gotSlop) {
          if (gotSlop) correctSlop++;
          else correctClean++;
        } else {
          failures.push({
            input: test.input,
            expected: test.expectedSlop,
            got: gotSlop,
          });
        }
      });

      const accuracy = (correctSlop + correctClean) / testSummary.total;
      console.log(`\nReal-world test results:`);
      console.log(`  Total tests: ${testSummary.total}`);
      console.log(
        `  Correct slop detection: ${correctSlop}/${testSummary.expectedSlop}`
      );
      console.log(
        `  Correct clean detection: ${correctClean}/${testSummary.expectedClean}`
      );
      console.log(`  Overall accuracy: ${(accuracy * 100).toFixed(1)}%`);

      if (failures.length > 0) {
        console.log(`  Failures (first 5):`, failures.slice(0, 5));
      }

      expect(accuracy).toBeGreaterThanOrEqual(0.75);
    });

    it("should correctly identify likely human slop", async () => {
      const { allRealWorldTests } = await import("./realworld-fixtures");

      const humanTests = allRealWorldTests.filter(
        (t) => t.expectedSlop && t.expectedHuman
      );

      let correct = 0;
      humanTests.forEach((test) => {
        const result = detect(test.input);
        if (result.isSlop && result.isLikelyHuman) {
          correct++;
        }
      });

      const accuracy = correct / humanTests.length;
      console.log(
        `Human slop detection: ${correct}/${humanTests.length} (${(
          accuracy * 100
        ).toFixed(1)}%)`
      );
      expect(accuracy).toBeGreaterThanOrEqual(0.7);
    });

    it("should handle sentence detection", () => {
      const slopSentence = "asdf jkl qwerty hjkl zxcv";
      const normalSentence = "the quick brown fox jumps over the lazy dog";

      const slopResult = detectSentence(slopSentence);
      const normalResult = detectSentence(normalSentence);

      expect(slopResult.isSlop).toBe(true);
      expect(slopResult.slopPercentage).toBeGreaterThan(0.5);

      expect(normalResult.isSlop).toBe(false);
      expect(normalResult.slopPercentage).toBeLessThan(0.3);
    });
  });
});
