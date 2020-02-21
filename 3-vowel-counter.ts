/**
 * Daily Challenge #3 - Vowel Counter
 * https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni
 *
 * Write a function that returns the number (count) of vowels in a given string.
 * Letters considered as vowels are: a, i, e, o, and u.
 * The function should be able to take all types of characters as input, including lower case letters,
 * upper case letters, symbols, and numbers.
 */

/**
 * Get the number of vowels from the given string input
 * Letters considered as vowels are: a, i, e, o, and u.
 */
function vowelCount(input: string): number {
  return input.match(/[aeiou]/gi).length;
}

(function main(): void {
  const tests: [string, number][] = [
    ["Empereol", 4],
    ["Daily Challenge #3 - Vowel Counter", 10],
    ["Letters considered as vowels are: a, i, e, o, and u.", 17]
  ];

  for (const [test, expected] of tests) {
    console.log(vowelCount(test) === expected ? "PASS" : "FAIL", {
      test,
      expected,
      result: vowelCount(test)
    });
  }
})();
