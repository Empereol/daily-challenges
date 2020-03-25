/**
 * Daily Challenge #37 - Name Swap
 * https://dev.to/thepracticaldev/daily-challenge-37-name-swap-4hg5
 *
 * Write a function that returns a string in which an individual's first name
 * is swapped with their last name.
 *
 * Example: nameShuffler('Emma McClane'); => "McClane Emma"
 */

function nameShuffler(fullname: string): string {
  if (typeof fullname !== 'string') return;

  return fullname
    .trim()
    .replace(/\s+/g, ' ')
    .split(/\b/g)
    .reverse()
    .join('');
}

console.log(nameShuffler('Emma McClane'));

console.log(nameShuffler('Foo Bar'));
console.log(nameShuffler('Foo    Bar'));
console.log(nameShuffler('   Foo Bar'));
console.log(nameShuffler('Foo Bar   '));
console.log(nameShuffler('Foo'));
console.log(nameShuffler('   Foo'));
console.log(nameShuffler('Foo   '));
console.log(nameShuffler(''));
console.log(nameShuffler(null));
