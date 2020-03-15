/**
 * Daily Challenge #205 - Consonant String Value
 * https://dev.to/thepracticaldev/daily-challenge-205-consonant-string-value-4i25
 *
 * Given a lowercase string that has alphabetic characters only and no spaces, implement a function that will
 * return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
 *
 * We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
 *
 * For example, for the word "zodiacs", let's cross out the vowels. We get: "z, d, cs".
 * The values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
 * solve("zodiacs") = 26
 *
 * For the word "strength", solve("strength") = 57
 * -- The consonant substrings are: "str" and "ngth" with
 * values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
 *
 * Tests
 * solve("chruschtschov") => 80
 * solve("khrushchev")
 * solve("strength")
 * solve("catchphrase")
 * solve("twelfthstreet")
 * solve("mischtschenkoana")
 */

/**
 * Return the highest value of consonant substrings
 */
function solve(input: string): number {
  return input
    .split(/[aeiou]/g)
    .map(toAlphabetIndex)
    .map(sum)
    .reduce((highest, val) => {
      return val > highest ? val : highest;
    }, 0);
}

/**
 * Map an input string to each character's alphabet position
 * aA = 1, bB = 2, cC = 3, .... zZ = 26
 * Characters outside the alphabet (numbers/symbols) are considered position 0
 */
function toAlphabetIndex(input: string): number[] {
  return input
    .toLowerCase()
    .split("")
    .map(letter => {
      const val = letter.charCodeAt(0) - 96;
      return val > 26 || val < 1 ? 0 : val;
    });
}

/**
 * Sum an array of numbers
 */
function sum(nums: number[]): number {
  return nums.reduce((total, curr) => total + curr, 0);
}

console.log(solve("zodiacs"));
console.log(solve("strength"));
console.log(solve("chruschtschov"));
