/**
 * Daily Challenge #200 - Longest Linear Palindromic Substring
 * https://dev.to/thepracticaldev/daily-challenge-200-longest-linear-palindromic-substring-3dkb
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward,
 * e.g., 'madam' or 'racecar'. Even the letter 'x' is considered a palindrome.
 * You are given a string s. Write a function that returns the longest contiguous
 * palindromic substring in s (it could be the entire string). In the event that
 * there are multiple longest palindromic substrings, return the first to occur.
 *
 * I'm not trying to trick you here:
 * You can assume that all inputs are valid strings.
 * Only the letters a-z will be used, all lowercase (your solution should, in
 * theory, extend to more than just the letters a-z though).
 * NOTE: Quadratic asymptotic complexity (O(N2)) or above will NOT work here.
 *
 * Examples
 * Basic Tests
 * Input: "babad"
 * Output: "bab"
 * (Note: "bab" occurs before "aba")
 *
 * Input: "abababa"
 * Output: "abababa"
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 * Edge Cases
 * Input: "ab"
 * Output: "a"
 *
 * Input: ""
 * Output: ""
 *
 * Tests
 * longest_palindrome('banana')
 * longest_palindrome('abba')
 * longest_palindrome('cbbd')
 * longest_palindrome('zz')
 * longest_palindrome('dddd')
 */

function isPalindrome(word: string) {
  for (let i = 0, length = word.length; i <= length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function allPalindromes(input: string): Set<string> {
  const wordSet = new Set<string>();

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const testStr = input.substring(j, j + i + 1);

      if (!wordSet.has(testStr) && isPalindrome(testStr)) {
        wordSet.add(testStr);
      }
    }
  }

  return wordSet;
}

function longestPalindrome(input: string): string {
  return Array.from(allPalindromes(input)).reduce(
    (longest, curr) => (curr.length > longest.length ? curr : longest),
    ''
  );
}

(function main(): void {
  const tests: [string, string][] = [
    ['babad', 'bab'],
    ['abababa', 'abababa'],
    ['cbbd', 'bb'],
    ['ab', 'a'],
    ['', ''],
    ['banana', 'anana'],
    ['abba', 'abba'],
    ['zz', 'zz'],
    ['dddd', 'dddd']
  ];

  for (const [test, expected] of tests) {
    const result = longestPalindrome(test);
    console.log(result === expected ? 'PASS' : 'FAIL', { test, expected, result });
  }
})();
