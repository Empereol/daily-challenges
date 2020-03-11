/**
 * Daily Challenge #202 - Complete the Pattern II
 * https://dev.to/thepracticaldev/daily-challenge-202-complete-the-pattern-ii-1e3n
 *
 * Implement a function pattern, which returns the following pattern for up to n number of rows.
 * If n < 1 then it should return " " i.e. empty string. There are no whitespaces in the pattern.
 *
 * Pattern:
 * 1
 * 22
 * 333
 * ....
 * .....
 * nnnnnn
 *
 * Examples
 * pattern(4):
 * 4321
 * 432
 * 43
 * 4
 *
 * Tests
 * pattern(5)
 * pattern(8)
 * pattern(0.5)
 */

function patternII(n: number): string {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    pattern += Array.from({ length: n + 1 - i }, (val, idx) => n - idx).join('');
    pattern += '\n';
  }

  return pattern;
}

console.log(patternII(5));
console.log(patternII(8));
console.log(patternII(0.5));
