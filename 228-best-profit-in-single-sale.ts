/**
 * Daily Challenge #228 - Best Profit in Single Sale
 * https://dev.to/thepracticaldev/daily-challenge-228-best-profit-in-single-sale-48pb
 */

function maxProfit(values: number[]): number {
  if (values.length < 2) {
    throw new Error('Must have at least 1 buy and 1 sell operation (values.length == 2)');
  }

  const buy = Math.min(...values);
  const sell = Math.max(...values);

  return sell - buy;
}

console.log(maxProfit([3, 10, 8, 4]));
console.log(maxProfit([10, 7, 5, 8, 11, 9]));
console.log(maxProfit([3, 4]));
console.log(maxProfit([9, 9]));
console.log(maxProfit([10, 7, 5, 4, 1]));
