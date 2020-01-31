/*
Daily Challenge #177 - Supersize Me

Setup
Implement a function that rearranges an integer into its largest possible value. 
If the integer is already in its maximum possible value, simply return it.

Examples
superSize(123456) //654321
superSize(105) //510

Tests
superSize(513)
superSize(2020)
superSize(4194)
superSize(608719)
superSize(123456789)
superSize(700000000001)
superSize(666666)
*/

/**
 * Rearrange an integer into its largest possible value
 * @param input Integer to rearange
 */
function superSize(input: number): number {
  return parseFloat(
    input
      .toString()
      .split('')
      .sort((a, b) => (a < b ? 1 : -1))
      .join('')
  );
}

(function main() {
  const tests = [123456, 105, 513, 2020, 4194, 608719, 123456789, 700000000001, 666666];

  for (const test of tests) {
    console.log(superSize(test));
  }
})();
