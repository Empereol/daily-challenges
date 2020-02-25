/**
 * Daily Challenge #163 - Significant Figures
 * https://dev.to/thepracticaldev/daily-challenge-163-significant-figures-n79
 *
 * Setup
 * Write a function that takes a number and returns the number of significant figures in a given number.
 *
 * Significant Figures are the meaningful digits in a measured or computed value.
 * All non-zero digits are significant
 * 4.357 has 4 significant figures
 * 152.63 has 5 significant figures
 *
 * Zeroes at the beginning of a number are not significant
 * 0215 has 3 significant figures
 * 0.6 has 1 significant figure
 *
 * Trailing zeroes in a number with a decimal point are significant
 * 78.200 has 5 significant figures
 * 20.0 has 3 significant figures
 *
 * Trailing zeroes in a number without a decimal point are not significant
 * 1200 has 2 significant figures
 * 345000 has 3 significant figures
 *
 * All zeroes between significant figures are significant
 * 90.09 has 4 significant figures
 * 5050 has 3 significant figures
 *
 * Constraints:
 * The type of the given number will be string.
 * You must return the number of significant figures as type int.
 * No blank strings will be given.
 *
 * Tests:
 * 1
 * 003
 * 3000
 * 404
 * 050030210
 * 0.1
 * 0.0
 */

/**
 * Return the number of significant figures in a given number
 * @param input
 */
function significantFigures(input: string): number {
  return (input.includes('.')
    ? // Remove only preceding 0s when a decimal is found
      input.replace(/^0+/g, '')
    : // Remove preceeding and succeeding 0s when decimal is not found
      input.replace(/^0+|0+$/g, '')
  ).match(/\d/g).length;
}

(function main(): void {
  const tests: [string, number][] = [
    ['4.357', 4],
    ['152.63', 5],
    ['0215', 3],
    ['0.6', 1],
    ['78.200', 5],
    ['20.0 ', 3],
    ['1200', 2],
    ['345000', 3],
    ['90.09', 4],
    ['5050', 3],
    ['0.0', 1],
    ['0.1', 1]
  ];

  for (const [test, expected] of tests) {
    console.log(significantFigures(test) === expected ? 'PASS' : 'FAIL', {
      test,
      expected,
      result: significantFigures(test)
    });
  }
})();
