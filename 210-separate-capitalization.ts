/**
 * Daily Challenge #210 - Separate Capitalization
 * https://dev.to/thepracticaldev/daily-challenge-210-separate-capitalization-64n
 *
 * Given a string, capitalize the letters that occupy even indexes and odd indexes
 * separately, and return as shown below. Index 0 will be considered even.
 *
 * For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. The input will be a
 * lowercase string with no spaces.
 *
 * Tests
 * capitalize("dev")
 * capitalize("method")
 * capitalize("hello")
 */

function capitalize(input: string): string[] {
  return Array.from(input).reduce(
    (acc, char, idx) => {
      return [
        acc[0] + (idx % 2 ? char.toLowerCase() : char.toUpperCase()),
        acc[1] + (idx % 2 ? char.toUpperCase() : char.toLowerCase())
      ];
    },
    ['', '']
  );
}

console.log(capitalize('dev'));
console.log(capitalize('method'));
console.log(capitalize('hello'));
