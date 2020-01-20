// Daily Challenge #166 - Cat and Mouse

// https://dev.to/thepracticaldev/daily-challenge-166-cat-and-mouse-jk4

// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
// You need to find out if the cat can catch the mouse from its current position. The cat can jump (j) characters.
// Also, the cat cannot jump over the dog.
// So:
// if j = 5:
// ..C.....m. returns 'Caught!' <-- not more than j characters between
// .....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough
// if j = 10:
// ...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog
// ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

enum MouseState {
  Protected = "Protected!",
  Caught = "Caught!",
  Escaped = "Escaped!"
}

enum GameCharacter {
  Mouse = "m",
  Cat = "C",
  Dog = "D"
}

function main() {
  const games: { board: string; range: number }[] = [
    { board: ".....C............m......", range: 5 },
    { board: "...m.........C...D", range: 10 },
    { board: "...m....D....C.......", range: 10 }
  ];

  for (const { board, range } of games) {
    console.log(getMouseState(board, range));
  }
}

/**
 * Given the game input string and range, determine the state of the mouse
 * @param board Game input. Series of GameCharacter and '.' (ex: ".....C............m......")
 * @param range Game range.
 */
function getMouseState(board: string, range: number): MouseState {
  const field = board.split("");

  const cat = field.indexOf(GameCharacter.Cat);
  const mouse = field.indexOf(GameCharacter.Mouse);
  const dog = field.indexOf(GameCharacter.Dog);

  if (isBetween(dog, [cat, mouse])) {
    return MouseState.Protected;
  } else if (inRange(cat, mouse, range)) {
    return MouseState.Caught;
  }

  return MouseState.Escaped;
}

/**
 * Check to see if the distance between position1 and position2 is within the specified range
 * @param pos1 Position 1
 * @param pos2 Position 2
 * @param range Range
 */
function inRange(pos1: number, pos2: number, range: number): boolean {
  return Math.abs(pos1 - pos2) <= range;
}

/**
 *  Check to see if the value is between the outside most posts
 * @param value
 * @param posts
 */
function isBetween(value: number, posts: number[]): boolean {
  let min = Math.min(...posts);
  let max = Math.max(...posts);

  return value > min && value < max;
}

main();
