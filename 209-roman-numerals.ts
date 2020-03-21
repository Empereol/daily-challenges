/**
 * Daily Challenge #209 - Roman Numerals
 * https://dev.to/thepracticaldev/daily-challenge-209-roman-numerals-40fc
 *
 * Implement a function that takes a Roman numeral as its argument and returns its
 * value as an integer. You don't need to validate the form of the Roman numeral.
 *
 * Modern Roman numerals are written by expressing each digit of the number to be
 * encoded separately, starting with the leftmost digit and skipping any 0s. So
 * 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered
 * "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses
 * each letter in descending order.
 *
 * Here's a chart to help out:
 * Symbol    Value
 * I          1
 * V          5
 * X          10
 * L          50
 * C          100
 * D          500
 * M          1,000
 *
 * Example
 * solution('XXI'); // should return 21
 *
 * Tests
 * solution('I')
 * solution('IV')
 * solution('MMVIII')
 * solution('MDCLXVI')
 */

type RomanNumeral = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
type RomanNumeralValue = Record<RomanNumeral, number>;

const RomanNumeralValue: RomanNumeralValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * Convert a string of Roman Numerals to an integer
 * @param input String of Roman Numerals. Invalid characters are ignored.
 */
function romanNumeralToInt(input: string): number {
  return Array.from(input)
    .map(n => RomanNumeralValue[n])
    .filter(Number)
    .reduce((total, val, idx, arr) => {
      if (val >= (arr[idx + 1] || 0)) {
        return (total += val);
      } else {
        return (total -= val);
      }
    }, 0);
}

/**
 * TEST
 */
(function Main(): void {
  const tests: [string, number][] = [
    ['XXI', 21],
    ['XXIcchuidhwidV', 21],
    ['I', 1],
    ['IV', 4],
    ['MMVIII', 2008],
    ['MDCLXVI', 1666]
  ];

  for (const [test, expected] of tests) {
    const result = romanNumeralToInt(test);
    console.log(result === expected ? 'PASS' : 'FAIL', { test, expected, result });
  }
})();
