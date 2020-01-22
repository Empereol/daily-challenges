// Daily Challenge #167 - Return String As Sorted Blocks
// https://dev.to/thepracticaldev/daily-challenge-167-return-string-as-sorted-blocks-mlj

// Task
// You will receive a string consisting of lowercase letters, uppercase letters, and digits
// as input. Your task is to return this string as blocks separated by dashes ("-").
// The elements of a block should be sorted with respect to the hierarchy listed below,
// and each block cannot contain multiple instances of the same character.

// The hierarchy is:

// lowercase letters (a - z), in alphabetic order
// uppercase letters (A - Z), in alphabetic order
// digits (0 - 9), in ascending order
// Examples

// "21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block

// "abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed

// "" -> "" - an empty input should result in an empty output

function main(): void {
  const input: string[] = [
    "21AxBz",
    "abacad",
    "",
    "7238921AxBzabacadabacad7238921AxBzabacadabacad",
    "7238921AxBzabacadabacad7238921AxBzaw8ue89awu8932edawjdamiodawd5156AWDMODMiodnmawodnabacadabacad"
  ];

  for (let i of input) {
    console.log(blockedString(i, "-"));
  }
}

/**
 * Separate a string by block of unique [a-z][A-Z][0-9] characters joined by the `joiner` character
 * Ex: `abacad` → `abcd-a-a`
 * @param input Input string to be blocked out
 * @param joiner Character which joins each block
 */
function blockedString(input: string, joiner: string): string {
  const rawblocks: string[][] = [[]];

  for (const char of input.split("")) {
    // Find the first block which does not contain the current character
    const block = rawblocks.find(b => !b.includes(char));

    // If that block exists, we add the character to it
    // Otherwise we create a new block with the character in it
    if (block) {
      block.push(char);
    } else {
      rawblocks.push([char]);
    }
  }

  // Sort the block characters by [a-z][A-Z][0-9]
  const sortedblocks = rawblocks.map(block => {
    block.sort((a, b) => (a > b ? 1 : -1));

    const digits = block.filter(i => i.match(/[0-9]/));
    const upper = block.filter(i => i.match(/[A-Z]/));
    const lower = block.filter(i => i.match(/[a-z]/));

    return [...lower, ...upper, ...digits];
  });

  return sortedblocks.map(b => b.join("")).join(joiner);
}

main();
