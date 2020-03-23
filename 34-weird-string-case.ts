/**
 * Daily Challenge #34 - WeIrD StRiNg CaSe
 * https://dev.to/devteam/daily-challenge-34-weird-string-case-54bo
 *
 * The goal of this challenge is to write a function that accepts a string and
 * returns the same string with all even indexed characters uppercased and all odd
 * indexed characters lowercased.
 *
 * This indexing should be zero-based with the index in position zero being
 * considered even. The input string will consist of only alphabetical characters
 * and spaces. Spaces should only be present when there are multiple words.
 *
 * Example:
 * to_weird_case('String'); # => returns 'StRiNg'
 * to_weird_case('Weird string case') # => returns 'WeIrD StRiNg CaSe'
 */

function toWeirdCase(input: string): string {
  return input
    .split(/\b/)
    .map(word =>
      Array.from(word).reduce(
        (total, char, idx) => (total += idx % 2 ? char.toLowerCase() : char.toUpperCase()),
        ''
      )
    )
    .join('');
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));
