/**
 * Daily Challenge #22 - Simple Pig Latin
 * https://dev.to/thepracticaldev/daily-challenge-22-simple-pig-latin-3ddl
 *
 * Write a function that moves the first letter of each word to the end of the word,
 * then add "ay". Leave punctuation untouched.
 *
 * Examples:
 * pig_it('Pig latin is cool') # igPay atinlay siay oolcay
 * pig_it('Hello world !') # elloHay orldway !
 */

function pigIt(input: string): string {
  return input.split(/\b/g).reduce((output, word) => {
    // If the word is not a digit or letter...
    // Or if it's an underscore since that's included in \w...
    // Then we just append it to the output without pig latin'ing it.
    if (word.match(/[^\w]+|_/g)) {
      return output + word;
    }

    // Append output with new word pig latin'd
    // (Moves the first letter of the word to the end, then add "ay")
    return output + word.substring(1) + word.substring(0, 1) + "ay";
  }, "");
}

console.log(pigIt("Pig latin is cool ! _ _"));
console.log(pigIt("Hello world !"));
