/**
 * Daily Challenge #206 - Pound Means Backspace
 * https://dev.to/thepracticaldev/daily-challenge-206-pound-means-backspace-4a53
 *
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" would actually be "bd".
 *
 * Implement a function that will process a string with "#" symbols and understand them as backspaces.
 *
 * Examples
 * "abc#def##ghi###" ==> "abd"
 * "abc#d##c" ==> "ac"
 * "abc##d######" ==> ""
 * "#######" ==> ""
 * "" ==> ""
 *
 * Tests
 * cleanString('abc#de##c')
 * cleanString('abc####dhh##c#')
 * cleanString('Thee# Empires# SS#tateBuildingg#')
 */

function cleanString(input: string): string {
  return [...input].reduce(
    (total, cur) => (cur === '#' ? (total = total.slice(0, -1)) : (total += cur)),
    ''
  );
}

(function Main(): void {
  const tests: [string, string][] = [
    ['abc#def##ghi###', 'abd'],
    ['abc#d##c', 'ac'],
    ['abc##d######', ''],
    ['#######', ''],
    ['', ''],
    ['abc#de##c', 'abc'],
    ['abc####dhh##c#', 'd'],
    ['Thee# Empires# SS#tateBuildingg#', 'The Empire StateBuilding']
  ];

  for (const [test, expected] of tests) {
    const result = cleanString(test);
    console.log(result === expected ? 'PASS' : 'FAIL', { test, expected, result });
  }
})();
