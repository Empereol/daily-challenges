/**
 * Daily Challenge #194 - Spread Number
 * https://dev.to/thepracticaldev/daily-challenge-194-spread-number-cdm
 *
 * Setup
 * Implement a function that will create an array and fill it with numbers ranging from 1 to n.
 * The numbers will always be positive.
 *
 * Examples
 * spreadNumber(1) => [1]
 * spreadNumber(2) => [1, 2]
 * spreadNumber(5) => [1, 2, 3, 4, 5]
 *
 * Tests
 * spreadNumber(3)
 * spreadNumber(6)
 * spreadNumber(9)
 */

/**
 * Return an array filled with numbers ranging from 1 to n
 */
function spreadNumber(n: number): number[] {
  return Array.from(Array(n), (val, idx) => idx + 1);
}

(function main(): void {
  const tests: [number, number[]][] = [
    [1, [1]],
    [2, [1, 2]],
    [5, [1, 2, 3, 4, 5]],
    [3, [1, 2, 3]],
    [6, [1, 2, 3, 4, 5, 6]],
    [9, [1, 2, 3, 4, 5, 6, 7, 8, 9]]
  ];

  for (const [test, expected] of tests) {
    console.log({
      test,
      expected: expected.join(),
      result: spreadNumber(test).join()
    });
  }
})();
