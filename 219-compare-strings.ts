/**
 * Daily Challenge #219 - Compare Strings
 * https://dev.to/thepracticaldev/daily-challenge-219-compare-strings-4g5h
 *
 * Create a function called that accepts 2 string arguments and returns an
 * integer of the count of occurrences the 2nd argument is found in the first
 * one.
 *
 * If no occurrences can be found, a count of 0 should be returned. The first
 * argument can be an empty string. The second string argument must be of at
 * least length 1.
 *
 * Examples
 * strCount('Hello', 'o') // => 1
 * strCount('Hello', 'l') // => 2
 * strCount('', 'z') // => 0
 *
 * Tests
 * strCount('oh goodness gracious', 'o')
 * strCount('howdy, pardner', 'd')
 * strCount('Incumbent President', 'e')
 */

/**
 * Return the number of occurances of the search character in the target string.
 *
 * @param target String to search.
 * @param search Character to search string for.
 *
 * @throws {Error} If search params is not exactly one character.
 *
 * @example
 * strCount('Hello', 'o') // => 1
 * strCount('Hello', 'l') // => 2
 * strCount('', 'z')      // => 0
 */
function strCount(target: string, search: string): number {
  if (!search || search.length !== 1) {
    throw new Error('Search character be exactly one character');
  }

  return (target.match(new RegExp(search, 'g')) || []).length;
}

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));
