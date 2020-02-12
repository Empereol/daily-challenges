/*
Daily Challenge #184 - Form the Minimum
https://dev.to/thepracticaldev/daily-challenge-184-form-the-minimum-41e7

Setup
Given an array of integers, implement a function that will return the lowest 
possible number that can be formed from these digits. You cannot use the same
 number more than once, even if it appears in the array multiple times.

Examples
minValue({1, 3, 1}) ==> return 13
minValue({5, 7, 5, 9, 7}) ==> return 579

Tests
minValue({1, 2, 3, 4})
minValue({1, 1, 7, 0})
minValue({9, 2, 1, 4, 3, 9, 5})
*/

/* 
My notes:
It's unclear as to what should happen with a `0`... 
Should [1,7,0] → 107
or should it be → 17 ?

Technically 17 has a (infinite) preceeding zero(s)...
*/

function minValue(input: number[]) {
  return Number(
    Array.from(new Set(input))
      .sort((a, b) => a - b)
      .join("")
  );
}

(function main(): void {
  const tests: [number[], number][] = [
    [[1, 3, 1], 13],
    [[5, 7, 5, 9, 7], 579],
    [[1, 2, 3, 4], 1234],
    [[1, 1, 7, 0], 17],
    [[9, 2, 1, 4, 3, 9, 5], 123459]
  ];

  for (const [test, expected] of tests) {
    console.log(minValue(test), test, expected);
  }
})();
