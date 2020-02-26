/**
 * Daily Challenge #195 - No Zeroes for Heroes
 * https://dev.to/thepracticaldev/daily-challenge-195-no-zeroes-for-heroes-2mm4
 *
 * Setup
 * It has officially been decided that numbers that end with zeroes are boring.
 * They might be fun in your world, but definitely not here. Implement a function
 * to eradicate any trailing zeroes. If the given number is 0, just leave him alone.
 * Poor guy anyway.
 *
 * Examples
 * 1450 -> 145
 * 960000 -> 96
 * 1050 -> 105
 * -1050 -> -105
 *
 * Tests
 * 9070
 * 210000
 * 10210
 * 0
 */

function trimTrailingZeroes(input: number): number {
  return input.toString().length === 1
    ? input
    : parseFloat(input.toString().replace(/0+$/g, ""));
}

(function main(): void {
  const tests: [number, number][] = [
    [1450, 145],
    [960000, 96],
    [1050, 105],
    [-1050, -105],
    [9070, 907],
    [210000, 21],
    [10210, 1021],
    [0, 0]
  ];

  for (const [test, expected] of tests) {
    console.log(trimTrailingZeroes(test) === expected ? "PASS" : "FAIL", {
      test,
      expected,
      result: trimTrailingZeroes(test)
    });
  }
})();
