/*
Daily Challenge #1 - String Peeler
https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep

Your goal is to create a function that removes the first and last letters of a string. 
Strings with two characters or less are considered invalid. 
You can choose to have your function return null or simply ignore.
*/

function stringPeeler(input: string): string {
  if (input.length <= 2) {
    console.warn('Invalid input. String length must be larger than 2.');
    return null;
  }

  return input.substr(1, input.length - 2);
}

(function main(): void {
  const tests: string[][] = [
    ['fundamentals', 'undamental'],
    ['important', 'mportan'],
    ['a', null],
    ['ab', null],
    ['abc', 'b']
  ];

  for (const [test, expected] of tests) {
    console.log(`${stringPeeler(test) === expected ? 'PASS' : 'FAIL'}`, { test, result: stringPeeler(test), expected });
  }
})();
