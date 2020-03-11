/**
 * Daily Challenge #201 - Complete the Pattern
 * https://dev.to/thepracticaldev/daily-challenge-201-complete-the-pattern-13nb
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
 * pattern(5):
 * 1
 * 22
 * 333
 * 4444
 * 55555
 */

function pattern(n: number): string {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    pattern += Array(i)
      .fill(i)
      .join('');
    pattern += '\n';
  }

  return pattern;
}

console.log(pattern(0));
console.log(pattern(11));
