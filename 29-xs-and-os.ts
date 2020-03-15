/**
 * Daily Challenge #29 - Xs and Os
 * https://dev.to/thepracticaldev/daily-challenge-29-xs-and-os-12mj
 *
 * Can you check to see if a string has the same amount of 'x's and 'o's?
 *
 * Examples input/output:
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 * Note: The method must return a boolean and be case insensitive. The string can contain any character
 */

function XO(input: string): boolean {
  return (
    (input.match(/[x]/gi) || []).length === (input.match(/[o]/gi) || []).length
  );
}

(function Main(): void {
  const tests: [string, boolean][] = [
    ["ooxx", true],
    ["xooxx", false],
    ["ooxXm", true],
    ["zpzpzpp", true],
    ["zzoo", false]
  ];

  for (const [test, expected] of tests) {
    const result = XO(test);
    console.log(result === expected ? "PASS" : "FAIL", {
      test,
      expected,
      result
    });
  }
})();
