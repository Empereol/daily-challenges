/*
Daily Challenge #175 - Complementary DNA

Setup
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions"
for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" and "C" and "G" are complements of each other.
Implement a function DNA_strand to match the given side of DNA with its complementary side.

Examples
DNA_strand("ATTGC") # return TAACG
DNA_strand("GTTAAC") # return CAATTG

Tests
DNA_strand("AAAA")
DNA_strand("CTACC")
DNA_strand("GTAT")
*/

enum DNASymbol {
  A = 'A',
  T = 'T',
  C = 'C',
  G = 'G'
}

// Complementary DNA symbol pairs
const DNAPairs: [DNASymbol, DNASymbol][] = [
  [DNASymbol.A, DNASymbol.T],
  [DNASymbol.C, DNASymbol.G]
];

/**
 * Match the given side of DNA and return its complementary side
 * @param strand DNA strand
 */
function DNAStrand(strand: string): string {
  const symbols: DNASymbol[] = strand.split('') as DNASymbol[];

  // Check for invalid symbols
  if (symbols.find(n => !Object.values(DNASymbol).includes(n))) {
    return 'DNA strand contains invalid symbol(s).';
  }

  const complementary: DNASymbol[] = [];

  for (const symbol of symbols) {
    // Get the index of the pair that contains our current symbol
    const pairIdx = DNAPairs.findIndex(pair => pair.includes(symbol));
    // Get the index of our current symbol
    const symbolIdx = DNAPairs[pairIdx].findIndex(item => item === symbol);
    // Push the complentary symbol
    // Since we know the array is in pairs... We can always get the complentary item
    // by taking the absolute value of the current index minus 1
    complementary.push(DNAPairs[pairIdx][Math.abs(symbolIdx - 1)]);
  }

  return complementary.join('');
}

(function main() {
  const tests: string[] = ['ATTGC', 'GTTAAC', 'AAAA', 'CTACC', 'GTAT', 'XOSKGTAT'];

  for (const test of tests) {
    console.log(DNAStrand(test));
  }
})();
