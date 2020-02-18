/**
 * Daily Challenge #191 - Alphabetical Addition
 * https://dev.to/thepracticaldev/daily-challenge-191-alphabetical-addition-27ki
 *
 * Setup
 * Write a function that can add letters together.
 * Each letter will be valued based on their position in the alphabet.
 *
 * Rules:
 * * Letters will always be lowercase.
 * * Letters can overflow (see second to last example of the description)
 * * If no letters are given, the function should return 'z'
 *
 * Examples
 * addLetters('a', 'b', 'c') = 'f'
 * addLetters('a', 'b') = 'c'
 * addLetters('z') = 'z'
 * addLetters('z', 'a') = 'a'
 * addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
 * addLetters() = 'z'
 *
 * Tests
 * addLetters('a', 'b', 'c')
 * addLetters('z')
 * addLetters('a','b')
 * addLetters('c')
 * addLetters('y', 'c', 'b')
 * addLetters()
 */

/**
 * Add togerther lowercase letters
 * Letters will always be lowercase.
 * Letters can overflow
 * If no letters are given, the function should return 'z'
 * @param letters List of lowercase letters
 */
function addLetters(...letters: string[]): string {
  let value: number = letters.reduce((val, letter) => {
    return val + (letter.charCodeAt(0) - 96);
  }, 0);

  console.log(value % 26);

  return String.fromCharCode(96 + (value % 26 || 26));
}

(function main(): void {
  const tests: [string[], string][] = [
    [['a', 'b', 'c'], 'f'],
    [['z'], 'z'],
    [['a', 'b'], 'c'],
    [['c'], 'c'],
    [['y', 'c', 'b'], 'd']
  ];

  for (const [test, expected] of tests) {
    console.log({
      result: addLetters(...test),
      test,
      expected
    });
  }
})();
