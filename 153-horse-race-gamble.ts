/**
 * Daily Challenge #153 - Horse Race Gamble
 * https://dev.to/thepracticaldev/daily-challenge-153-horse-race-gamble-2hg2
 *
 * Setup
 * Your friend likes to go to the horse races and gamble on which horses will finish first, second, and third
 * place. Unfortunately, he doesn't know how many horses will be entering until he gets to the track.
 *
 * Write a function that will take any number of horses as its only argument. This function must return the total
 * number of different combinations of winners for the gold, silver, and bronze medals.
 *
 * For example, if there are 15 horses, there are 2730 possible unique combinations of winners. If the number of
 * horses is 3 or less, return the input value. If the number of horses is not an integer, return undefined.
 *
 * Examples
 * horses(15), 2730, true)
 * horses(2.5), undefined, false)
 *
 * Tests
 * horses(12)
 * horses(2)
 * horses(11)
 * horses(a)
 */

function horses(n: number): number {
  if (Number.isInteger(n)) {
    return n < 3 ? n : n * (n - 1) * (n - 2);
  }
}

(function main(): void {
  const tests: [number, number][] = [
    [15, 2730],
    [2.5, undefined],
    [12, 1320],
    [2, 2],
    [11, 990]
  ];

  for (const [test, expected] of tests) {
    console.log(horses(test) === expected ? "PASS" : "FAIL", {
      test,
      expected,
      result: horses(test)
    });
  }
})();
