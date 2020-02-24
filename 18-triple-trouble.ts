/**
 * Daily Challenge #18 - Triple Trouble
 * https://dev.to/thepracticaldev/daily-challenge-18-triple-trouble-2cil
 *
 * Write a function tripledouble(num1,num2) which takes numbers num1 and num2
 * and returns 1 if there is a straight triple of a number at any place in num1
 * and also a straight double of the same number in num2. If this isn't the case,
 * return 0
 */

function tripleDouble(num1: number, num2: number): number {
  return /(\d)\1\1.*,.*\1\1/.test(`${num1}, ${num2}`) ? 1 : 0;

  // const str1 = num1.toString();
  // const str2 = num2.toString();

  // // Find any triple digits
  // const triples = str1.match(/(\d)\1\1/g);

  // // For each triple found, check for a double in the second
  // for (const triple of triples) {
  //   const re = new RegExp(`(${triple[0]})\\1`);
  //   if (str2.match(re)) return 1;
  // }

  // return 0;
}

console.log(tripleDouble(4519992777, 4117772289));
