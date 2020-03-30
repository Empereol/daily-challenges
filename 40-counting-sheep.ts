/**
 * Daily Challenge #40 - Counting Sheep
 * https://dev.to/thepracticaldev/daily-challenge-40-counting-sheep-6pc
 *
 * Given a non-negative integer, 3 for example, return a string with a murmur:
 * "1 sheep...2 sheep...3 sheep...".
 * Input will always be valid, i.e. no negative integers.
 */

function countSheep(sheep: number): string {
  if (sheep < 1) {
    return;
  }

  return Array.from({ length: sheep }, (_, idx) => `${idx + 1} sheep...`).join('');
}

console.log(countSheep(5)); //→ 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...
