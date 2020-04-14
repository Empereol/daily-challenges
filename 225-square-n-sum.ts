/**
 * Daily Challenge #225 - Square'n'Sum
 * https://dev.to/thepracticaldev/daily-challenge-225-square-n-sum-23b7
 *
 * Implement a function squareSum so that it squares any number(s) passed into
 * it and then adds the squares together.
 *
 * For example, for [1, 2, 2]: it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 *
 * Tests
 * [1, 2, 3, 4]
 * [0, 3, 5, 7]
 * [2, 2, 20]
 */

function squareSum(...nums: number[]): number {
  return nums.reduce((total, num) => total + num ** 2, 0);
}

console.log(squareSum(1, 2, 2));
console.log(squareSum(1, 2, 3, 4));
console.log(squareSum(0, 3, 5, 7));
console.log(squareSum(2, 2, 20));
