/**
 * Daily Challenge #212 - DNA to RNA
 * https://dev.to/thepracticaldev/daily-challenge-212-dna-to-rna-377
 *
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in
 * biological systems. It is composed of four nucleic acid bases Guanine ('G'),
 * Cytosine ('C'), Adenine ('A'), and Thymine ('T').
 *
 * Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA
 * differs lightly from DNA its chemical structure and contains no Thymine. In
 * RNA Thymine is replaced by another nucleic acid Uracil ('U').
 *
 * Create a function which translates a given DNA string into RNA.
 *
 * For example:
 * DNAtoRNA("GCAT") returns ("GCAU")
 * The input string can be of arbitrary length - in particular, it may be empty.
 * All input is guaranteed to be valid, i.e. each input string will only ever
 * consist of 'G', 'C', 'A' and/or 'T'.
 *
 * Tests
 * DNAtoRNA("TTTT")
 * DNAtoRNA("GCAT")
 * DNAtoRNA("GACCGCCGCC")
 */

function DNAtoRNA(dna: string): string {
  const validDNAregex: RegExp = /^(G|T|A|C)*$/i;

  if (validDNAregex.test(dna) === false) {
    throw new Error('Invalid DNA string provided');
  }

  return dna.replace(/T/gi, 'U').toUpperCase();
}

console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('gcat'));
console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));
console.log(DNAtoRNA('GCAU'));
