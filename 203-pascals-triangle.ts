/**
 * Daily Challenge #203 - Pascal's Triangle
 * https://dev.to/thepracticaldev/daily-challenge-203-pascal-s-triangle-4lj6
 *
 * We want to calculate the sum of the squares of the binomial coefficients on a given line with a function
 * called easyline (or easyLine or easy-line).
 *
 * Can you write a program which calculates easyline(n) where n is the line number?
 *
 * The function will take n (with: n >= 0) as parameter and will return the sum of the squares of the binomial
 * coefficients on line n.
 *
 * Examples:
 * easyline(0) => 1
 * easyline(1) => 2
 * easyline(4) => 70
 * easyline(50) => 100891344545564193334812497256
 *
 * Tests
 * easyline(7)
 * easyline(13)
 * easyline(3)
 * easyline(19)
 */

/**
 * Converted to JS from this Python solution: https://dev.to/vidit1999/comment/mf8o
 */

function easyline(n: number): number {
  return n === 0 ? 1 : ((2 * (2 * n - 1)) / n) * easyline(n - 1);
}

(function main(): void {
  const tests: [number, number][] = [
    [0, 1],
    [1, 2],
    [4, 70],
    [50, 100891344545564193334812497256]
  ];

  for (const [test, expected] of tests) {
    const result = easyline(test);

    console.log(result === expected ? "PASS" : "FAIL", {
      test,
      expected,
      result
    });
  }
})();
