/**
 * Daily Challenge #41 - Greed is Good
 * https://dev.to/thepracticaldev/daily-challenge-41-greed-is-good-4h4i
 *
 * Greed is a dice game played with five six-sided dice. Using an array
 * containing five six-sided dice values, write a function that will score a
 * throw according to the following rules:
 *
 * Three 1's => 1000 points
 * Three 6's => 600 points
 * Three 5's => 500 points
 * Three 4's => 400 points
 * Three 3's => 300 points
 * Three 2's => 200 points
 * One 1 => 100 points
 * One 5 => 50 point
 *
 * A single die can only be counted once in each roll. For example, a "5" can
 * only count as part of a triplet (contributing to the 500 points) or alone
 * (as 50 points), but not both in the same roll.
 *
 * Example Scoring:
 *
 * 5 1 3 4 1 => 50 + 2 * 100 = 250
 * 1 1 1 3 1 => 1000 + 100 = 1100
 * 2 4 4 5 4 => 400 + 50 = 450
 */

interface GreedScoreData {
  r: number; // Roll value
  c: number; // Count
  p: number; // Points
}

const GreedScoreSheet: GreedScoreData[] = [
  { r: 1, c: 3, p: 1000 },
  { r: 6, c: 3, p: 600 },
  { r: 5, c: 3, p: 500 },
  { r: 4, c: 3, p: 400 },
  { r: 3, c: 3, p: 300 },
  { r: 2, c: 3, p: 200 },
  { r: 1, c: 1, p: 100 },
  { r: 5, c: 1, p: 50 }
];

function dicebin(roll: number[], maxVal: number): number[] {
  // Create a bin where each index's value represents the
  // amount of dice rolled at that value.
  // Note: the array is of length 7 because the zero index...
  // It will be ignored since you can't roll a `0`
  const dicebin = Array.from({ length: maxVal + 1 }, () => 0);

  // Increment the index corresponding to the roll
  for (const die of roll) dicebin[die]++;

  return dicebin;
}

function greedPoints(...roll: number[]): number {
  let score = 0;

  const db = dicebin(roll, 6);

  // The GreedScoreSheet should be sorted by descending count
  // to ensure max point values
  for (const { r, c, p } of GreedScoreSheet) {
    const matches = Math.floor(db[r] / c);
    db[r] -= matches * c;
    score += matches * p;
  }

  return score;
}

console.log(greedPoints(5, 1, 3, 4, 1));
console.log(greedPoints(1, 1, 1, 3, 1));
console.log(greedPoints(2, 4, 4, 5, 4));
