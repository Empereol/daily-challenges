/*
Daily Challenge #183 - Automorphic Numbers
https://dev.to/thepracticaldev/daily-challenge-183-automorphic-numbers-3mmj

Setup
For this challenge, implement a function that will return true if a number is Automorphic. 
Automorphics are numbers whose square ends in the same digits as the number itself. 
The number will always be positive.

Examples
autoMorphic(13) => false
13 squared is 69. Since 69 does not end in 13, return false.

autoMorphic(25) => true
25 squared is 625. Since 625 ends in 25, return true.

Tests
autoMorphic(6)
autoMorphic(625)
autoMorphic(225)
*/

function isAutoMorphic(input: number): boolean {
  return (input ** 2).toString().endsWith(input.toString());
}

(function main(): void {
  const tests: [number, boolean][] = [
    [13, false],
    [25, true],
    [6, true],
    [625, true],
    [225, false]
  ];

  for (const [test, expected] of tests) {
    const answer = isAutoMorphic(test);

    console.log(answer === expected ? "PASS" : "FAIL", {
      test,
      isAutoMorphic: answer,
      expected
    });
  }
})();
