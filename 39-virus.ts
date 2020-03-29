/**
 * Daily Challenge #39 - Virus
 * https://dev.to/thepracticaldev/daily-challenge-39-virus-4jkj
 *
 * You've just finished writing the last chapter for your novel when a
 * virus suddenly infects your document. It has swapped the 'i's and
 * 'e's in 'ei' words and capitalized random letters. In today's
 * challenge, you will write a function which will:
 *
 * a) remove the spelling errors in 'ei' words.
 * (Example of 'ei' words: their, caffeine, deceive, weight)
 *
 * b) only capitalise the first letter of each sentence.
 * Make sure the rest of the sentence is in lower case.
 *
 * Example:
 * He haD iEght ShOTs of CAffIEne. => He had eight shots of caffeine.
 */

/**
 * My notes:
 * 
 * This one is an incredibly simple way of meeting the criteria...
 * Otherwise it would be really difficult... You'd need a dictionary
 * of words to swap "ie"/"ei" since "ie" isn't often wrong...
 * 
 * Also the sentence case'ing is very simple. Only works on periods
 */

function antivirus(sentence: string): string {
  return sentence
    .toLowerCase()
    .replace(/(ie)/gm, "ei")
    .split(". ")
    .map(sentence => sentence[0].toUpperCase() + sentence.slice(1))
    .join(". ");
}

console.log(
  antivirus("He haD iEght ShOTs of CAffIEne. aFter thaT HE WenT tO SleeP.")
);
