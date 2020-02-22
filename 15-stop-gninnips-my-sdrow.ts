/**
 * Daily Challenge #15 - Stop gninnipS My sdroW!
 * https://dev.to/thepracticaldev/daily-challenge-15-stop-gninnips-my-sdrow-255j
 *
 * Write a function that takes in a string of one or more words and returns the same string,
 * but with all words with five letters or more reversed. Strings passed in will consist of
 * only letters and spaces.
 *
 * Be sure to keep the order of the words the same and only reverse the letters.
 */

function gninnipsSdrow(input: string): string {
  return input
    .split(/\b/)
    .map(word =>
      word.length >= 5
        ? word
            .split('')
            .reverse()
            .join('')
        : word
    )
    .join('');
}

console.log(gninnipsSdrow('Be sure to keep the order of the words the same and only reverse the letters.'));
