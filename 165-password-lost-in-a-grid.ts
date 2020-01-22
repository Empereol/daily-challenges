// Daily Challenge #165 - Password Lost in a Grid
// https://dev.to/thepracticaldev/daily-challenge-165-password-lost-in-a-grid-11af

const StartingCharacter = "x";
const RecordCharacter = "T";

const games: { grid: string[][]; directions: string[] }[] = [
  {
    grid: [
      ["p", "x", "m"],
      ["a", "$", "$"],
      ["k", "i", "t"]
    ],
    directions: ["leftT", "downT", "rightT", "rightT"]
  },
  {
    grid: [
      ["a", "x", "c"],
      ["g", "l", "t"],
      ["o", "v", "e"]
    ],
    directions: ["downT", "down", "leftT", "rightT", "rightT", "upT"]
  },
  {
    grid: [
      ["x", "l", "m"],
      ["o", "f", "c"],
      ["k", "i", "t"]
    ],
    directions: ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"]
  },
  {
    grid: [
      ["c", "l", "m"],
      ["o", "f", "c"],
      ["k", "i", "t"]
    ],
    directions: ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"]
  }
];

function main(): void {
  for (const { grid, directions } of games) {
    console.log(getPassword(grid, directions));
  }
}

function getPassword(grid: string[][], directions: string[]): string {
  const pw: string[] = [];
  const y = grid.findIndex(arr => arr.includes(StartingCharacter));
  const x = y < 0 ? null : grid[y].findIndex(x => x === StartingCharacter);

  if (x === null || y === null) {
    return "No starting character found";
  }

  let pos = { x, y };

  for (let dir of directions) {
    pos = updatePosition(pos, dir);

    if (dir.endsWith(RecordCharacter)) {
      pw.push(grid[pos.y][pos.x]);
    }
  }

  return pw.join();
}

function updatePosition({ x, y }, direction: string): { x: number; y: number } {
  // Remove Record Character from direction
  const dir = direction.split(RecordCharacter)[0];

  switch (dir) {
    case "up": {
      return { x, y: y - 1 };
    }
    case "right": {
      return { x: x + 1, y };
    }
    case "down": {
      return { x, y: y + 1 };
    }
    case "left": {
      return { x: x - 1, y };
    }
  }
}

main();
