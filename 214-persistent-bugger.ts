/**
 * Daily Challenge #214 - Persistent Bugger
 *
 * https://dev.to/thepracticaldev/daily-challenge-214-persistent-bugger-30gl
 *
 * Write a function, persistence, that takes in a positive parameter num and
 * returns its multiplicative persistence, which is the number of times you must
 * multiply the digits in num until you reach a single digit.
 *
 * Examples
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 *                       // and 4 has only one digit
 *
 * persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 *                        // 1*2*6 = 12, and finally 1*2 = 2
 *
 * persistence(4) === 0 // because 4 is already a one-digit number
 *
 * Tests
 * persistence(5)
 * persistence(52)
 * persistence(377)
 */

/**
 * Returns a number's multiplicative persistence, which is the number of times you
 * must multiply the digits in num until you reach a single digit.
 * @param num Number
 */
function persistence(num: number): number {
  if (!Number.isInteger(num)) {
    throw new Error('Supplied num must be an integer');
  }

  if (num < 10) return 0;

  const nums: number[] = Array.from(num.toString(), char => parseInt(char));

  return 1 + persistence(nums.reduce((t, n) => (t *= n), 1));
}

(function Main(): void {
  const tests: [number, number][] = [
    [39, 3],
    [999, 4],
    [4, 0],
    [5, 0],
    [52, 2],
    [377, 4]
  ];

  for (const [test, expected] of tests) {
    const result = persistence(test);
    console.log(result === expected ? 'PASS' : 'FAIL', { test, expected, result });
  }
})();
