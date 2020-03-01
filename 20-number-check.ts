/**
 * Daily Challenge Post #20 - Number Check
 * https://dev.to/thepracticaldev/daily-challenge-post-20-number-check-4782
 *
 * Create a function which checks a number for three different properties.
 * Is the number prime?
 * Is the number even?
 * Is the number a multiple of 10?
 *
 * Each should return either true or false, which should be given as an array.
 */

/**
 * Return an array with three booleans determining if:
 * - The number is prime
 * - The number is even
 * - The number is a multiple of 10
 */
function numberCheck(n: number): [boolean, boolean, boolean] {
  return [isPrime(n), isFactorOf(n, 2), isFactorOf(n, 10)];
}

/**
 * Return a boolean indicating if the given number is prime
 */
function isPrime(n: number): boolean {
  if (n <= 3) {
    return n > 1;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Return a boolean indicating if the given number is a multiple of the given factor
 */
function isFactorOf(n: number, factor: number): boolean {
  return n % factor === 0;
}

(function main(): void {
  const tests: [number, [boolean, boolean, boolean]][] = [
    [7, [true, false, false]],
    [10, [false, true, true]],
    [-7, [false, false, false]],
    [-10, [false, true, true]]
  ];

  for (const [test, expected] of tests) {
    console.log({
      test,
      expected: expected.join(),
      result: numberCheck(test).join()
    });
  }
})();
