/**
 * Daily Challenge #24 - Shortest Step
 * https://dev.to/thepracticaldev/daily-challenge-24-shortest-step-41o3
 * 
 * Given a number, return the shortest amount of steps it would take from 1 to land exactly on that number.
 * 
 * A step is defined as:
 * * Adding 1 to the number: num += 1
 * * Doubling the number: num *= 2
 * 
 * You will always start from the number 1 and you will have to return the shortest count of steps it 
 * would take to land exactly on that number.

 * Examples:
 * num == 3 would return 2 steps:
 * 1 + 1 = 2: 1 step
 * 2 + 1 = 3: 2 steps
 * 
 * num == 12 would return 4 steps:
 * 1 + 1 = 2: 1 step
 * 2 + 1 = 3: 2 steps
 * 3 x 2 = 6: 3 steps
 * 6 x 2 = 12: 4 steps
 */

function shortestSteps(n: number): number {
  let steps = 0;

  while (n > 1) {
    n % 2 ? n-- : (n /= 2);
    steps++;
  }

  return steps;
}

/**
 * Clever convert to binary solution
 * https://dev.to/wheatup/comment/dd11
 */
interface String {
  count(search: string): number;
}

String.prototype.count = function(search) {
  return this.split(search).length - 1;
};

function shortestStepsBinary(n: number): number {
  const binary = n.toString(2);
  return (binary.count("1") - 1) * 2 + binary.count("0");
}

/**
 * Tests
 */
(function tests(): void {
  const tests: [number, number][] = [[3, 2], [12, 4]];

  for (const [test, expected] of tests) {
    const shortestStepsResult = shortestSteps(test);
    const shortestStepsBinaryResult = shortestStepsBinary(test);

    console.log(
      "shortestSteps ->",
      shortestStepsResult === expected ? "PASS" : "FAIL",
      { test, expected, result: shortestStepsResult }
    );
    console.log(
      "shortestStepsBinary ->",
      shortestStepsBinaryResult === expected ? "PASS" : "FAIL",
      { test, expected, result: shortestStepsBinaryResult }
    );
  }
})();
