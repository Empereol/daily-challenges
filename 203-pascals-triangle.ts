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

(function Main(): void {
  const tests: [number, number][] = [
    [0, 1],
    [1, 2],
    [4, 70],
    [50, 100891344545564193334812497256]
  ];

  for (const [test, expected] of tests) {
    const result = easyline(test);

    console.log(result === expected ? 'PASS' : 'FAIL', {
      test,
      expected,
      result
    });
  }
})();

/**
 * More research into Pascal's Triangle and binomial coefficients...
 * https://www.geeksforgeeks.org/pascal-triangle/
 */
function pascalsTriangle(n: number): number[][] {
  const pascalArr: number[][] = [];

  for (let line = 0; line < n; line++) {
    pascalArr.push(pascalsTriangleRow(line));
  }

  return pascalArr;
}

function pascalsTriangleRow(row: number): number[] {
  const arr: number[] = [];

  for (let i = 0; i <= row; i++) {
    arr.push(binomialCoeff(row, i));
  }

  return arr;
}

function binomialCoeff(n: number, k: number): number {
  let res = 1;

  if (k > n - k) k = n - k;

  for (let i = 0; i < k; i++) {
    res *= n - i;
    res /= i + 1;
  }

  return res;
}

function easylineII(n: number) {
  return pascalsTriangleRow(n).reduce((total, col) => (total += col ** 2));
}
