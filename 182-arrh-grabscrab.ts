/*
Daily Challenge #182 - Arrh, grabscrab!
https://dev.to/thepracticaldev/daily-challenge-182-arrh-grabscrab-lad

Setup
Pirates are notoriously bad at pronunciation. For this challenge, implement 
a function that will accept a jumbled word and a dictionary. 
It should output the words that the pirate might have been saying.

Example
grabscrab( "ortsp", ["sport","parrot","ports","matey"])
=> ["sport", "ports"]

Tests
grabscrab("trisf", ["first"])
grabscrab("oob", ["bob", "baobab"])
grabscrab("ainstuomn", ["mountains", "hills", "mesa"])
grabscrab("oolp", ["donkey", "pool", "horse", "loop"])
*/

function grabscrab(jumbled: string, dictionary: string[]): string[] {
  return dictionary.reduce((acc, word) => {
    if (word.split('').every(i => jumbled.includes(i))) {
      return [...acc, word];
    }

    return acc;
  }, []);
}

(function main(): void {
  const tests: [string, string[]][] = [
    ['ortsp', ['sport', 'parrot', 'ports', 'matey']],
    ['trisf', ['first']],
    ['oob', ['bob', 'baobab']],
    ['ainstuomn', ['mountains', 'hills', 'mesa']],
    ['oolp', ['donkey', 'pool', 'horse', 'loop']]
  ];

  for (const [input, dictionary] of tests) {
    console.log(grabscrab(input, dictionary));
  }
})();
