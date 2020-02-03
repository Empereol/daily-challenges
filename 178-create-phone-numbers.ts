/*
Daily Challenge #178 - Create Phone Numbers
https://dev.to/thepracticaldev/daily-challenge-178-create-phone-numbers-3d64

Setup
Implement a function that accepts an array of 10 integers. 
Have the function return those numbers as a String in the form of a phone number. 
Please use the following format for the phone number: (XXX) XXX-XXXX. 
Integers in the array will be no larger than 9.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // should return (123) 456-7890

Tests
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

*/

export function createPhoneNumber(input: number[], encrypt?: boolean): string | undefined {
  if (input.length !== 10) {
    console.error('Invalid input. Input length must be exactly 10.');
    return;
  }

  let [a, b, c, d, e, f, g, h, i, j]: (number | string)[] = input;

  if (encrypt) {
    e = f = g = h = i = j = 'X';
  }

  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

(function main() {
  const tests = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
  ];

  for (const test of tests) {
    console.log(createPhoneNumber(test));
  }
})();
