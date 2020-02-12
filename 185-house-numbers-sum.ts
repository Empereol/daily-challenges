/*
Daily Challenge #185 - House Numbers Sum
https://dev.to/thepracticaldev/daily-challenge-185-house-numbers-sum-252p

Setup
A boy is walking home from school. To make the walk more enjoyable, 
he decides to add up the numbers of the houses he passes during his walk. 
Unfortunately, the numbers won't appear to him in any specific order, 
since he's regularly taking turns.

At some point during the walk, the boy encounters a house marked number 0. 
This surprises him so much that he stops adding the numbers 
after that house to the total.

For the given array of house numbers, determine the sum that the boy will get. 
There will always be at least one number 0 house on the path.

Examples
inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2] => 11
inputArray = [1, 4, 34, 124, 2, 0, 14, 51] => 165

Tests
inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2]
inputArray = [4, 2, 1, 6, 0]
inputArray = [4, 1, 2, 3, 0, 10, 2]
*/

/**
 * Sum numbers until the search value is found
 * @param input Number array to sum
 * @param search Sum breaker value
 */
function breakEarlySum(input: number[], search = 0) {
  return input.slice(0, input.indexOf(search)).reduce((acc, cur) => acc + cur, 0);
}

(function main(): void {
  const tests: [number[], number][] = [
    [[5, 1, 2, 3, 0, 1, 5, 0, 2], 11],
    [[1, 4, 34, 124, 2, 0, 14, 51], 165],
    [[4, 2, 1, 6, 0], 13],
    [[4, 1, 2, 3, 0, 10, 2], 10],
  ];

  for (const [test, expected] of tests) {
    console.log(breakEarlySum(test), test, expected);
  }
})();
