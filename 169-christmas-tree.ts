// Daily Challenge #169 - Christmas Tree
// https://dev.to/thepracticaldev/daily-challenge-169-christmas-tree-4dea

// Create a function christmasTree(height) or christmas_tree(height) (in Ruby) that returns a Christmas tree of the correct height
// christmasTree(5) || christmas_tree(height) should return:

// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.

(function main(): void {
  const games = [5, 10, 20, 0, -1];

  for (const game of games) {
    console.log(christmasTree(game));
  }
})();

/**
 * Create an ASCII Christmas tree
 * @param height How many rows
 */
function christmasTree(height: number): string {
  const width = height * 2 - 1;

  return Array.from({ length: height }, (row, idx) => {
    const stars = idx + 1;

    return '*'
      .repeat(stars * 2 - 1)
      .padStart(width / 2 + stars)
      .padEnd(width);
  }).join('\n');
}
