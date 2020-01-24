// Daily Challenge #169 - Christmas Tree
// https://dev.to/thepracticaldev/daily-challenge-169-christmas-tree-4dea

// Create a function christmasTree(height) or christmas_tree(height) (in Ruby) that returns a Christmas tree of the correct height
// christmasTree(5) || christmas_tree(height) should return:

// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.

(function main(): void {
  const games = [5, 10, 100, 0];

  for (const game of games) {
    console.log(christmasTree(game));
  }
})();

function christmasTree(height: number): string {
  if (height <= 0) {
    return 'Height must be greater than 0.';
  }

  // Create an array the size of the height of the tree
  // Each item should contain an array with a length equal
  // to the height of the tree multiplied by 2 subtract 1
  const rows: string[][] = new Array(height).fill(new Array(height * 2 - 1).fill(''));

  // Create the "tree" upside down since it's esier for my
  // brain to match the amount of space to the current idx
  const inverseTree = rows.map((row, idx) => {
    if (idx > 0) {
      row = row.map((r, i) => {
        if (i < idx || i >= row.length - idx) {
          return ' ';
        } else {
          return '*';
        }
      });
    }

    return row;
  });

  // Return the flipped tree joined into a single string
  return inverseTree
    .reverse()
    .map(r => r.join(''))
    .join('\n');
}
