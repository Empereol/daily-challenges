/**
 * Daily Challenge #189 - Convert Number into Reversed Array
 * https://dev.to/thepracticaldev/daily-challenge-189-convert-number-into-reversed-array-2bfi
 *
 * Setup
 * Write a function that takes a random number as input and converts it into an array with
 * the digits of that number appearing in reverse order.
 *
 * Example
 * convertNtA(348597) => [7,9,5,8,4,3]
 *
 * Tests
 * convertNtA(6581554)
 * convertNtA(123456)
 * convertNtA(987123)
 */

function convertNtA(num: number): number[] {
  return num
    .toString()
    .split("")
    .map(Number)
    .reverse();
}

(function main(): void {
  const tests: [number, number[]][] = [
    [348597, [7, 9, 5, 8, 4, 3]],
    [6581554, [4, 5, 5, 1, 8, 5, 6]],
    [123456, [6, 5, 4, 3, 2, 1]],
    [987123, [3, 2, 1, 7, 8, 9]]
  ];

  for (const [test, expected] of tests) {
    console.log({ result: convertNtA(test), test, expected });
  }
})();
