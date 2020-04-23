/**
 * Daily Challenge #229 - Haiku Validator
 * https://dev.to/thepracticaldev/daily-challenge-229-haiku-validator-d29
 */

function sanitizeHaiku(input: string): string[] {
  return input.split(/\n/).map(line => line.replace(/[^a-z]/gi, '').trim());
}

function countSyllables(input: string): number {
  return input.split(' ').reduce((count, word) => {
    const matches = word.match(/[aeiouy]+/gi);

    if (word.endsWith('e') && matches.length > 1) {
      count -= 1;
    }

    count += matches.length;

    return count;
  }, 0);
}

function validateHaiku(haiku: string, syllables = [5, 7, 5]): boolean {
  // Break the input haiku string into lines (string[])
  // Remove all "syllableless" characters (punctuation/numbers/etc...)
  const lines = sanitizeHaiku(haiku);

  // We know it can't validate if our lines count
  // doesn't match expected syllable count
  if (lines.length !== syllables.length) {
    return false;
  }

  // Get each line syllable count
  const counts = lines.map(line => countSyllables(line));

  if (counts.join() !== syllables.join()) {
    return false;
  }

  return true;
}

(function Main(): void {
  const tests: [string, boolean][] = [
    ['An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.', true],
    ['My code is cool, right?\nJava # Python ; Ruby // Go:\nI know them all, yay!', true],
    ['Autumn moonlight -\naworm digs silently\ninto the chestnut.', false]
  ];

  for (const [test, expected] of tests) {
    const result = validateHaiku(test);

    console.log(result === expected ? 'PASS' : 'FAIL', { test, expected, result });
  }
})();
