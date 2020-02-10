/*
Daily Challenge #2 - String Diamond
https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2

The shape that the print method will return should resemble a diamond. 
A number provided as input will represent the number of asterisks printed on the middle line. 
The line above and below will be centered and will have two less asterisks than the middle line. 
This reduction will continue for each line until a line with a single asterisk is printed at the top and bottom of the figure.

Return null if input is an even number or a negative number.

Note: JS and Python students must implement diamond() method and return None (Py) or null(JS) for invalid input.
*/

/**
 * Creates an ASCII diamond
 * @param width Maximum width of diamond (at center). Must be an positive odd number
 */
function diamond(width: number): string {
  if (!(width % 2) || width < 0) {
    return null;
  }

  return Array.from({ length: width }, (row, idx) => {
    const stars = idx < width / 2 ? idx + 1 : width - idx;

    return '*'
      .repeat(stars * 2 - 1)
      .padStart(width / 2 + stars)
      .padEnd(width);
  }).join('\n');
}

(function main(): void {
  const tests: number[] = [11, 3, 9];

  for (const test of tests) {
    console.log(diamond(test));
  }
})();
