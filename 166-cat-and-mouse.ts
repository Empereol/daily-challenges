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

function main() {
  const games: { s: string; r: number }[] = [
    { s: ".....C............m......", r: 5 },
    { s: "...m.........C...D", r: 10 },
    { s: "...m....D....C.......", r: 10 }
  ];

  games.forEach(g => console.log(g, mouseEscaped(g.s, g.r)));
}

function mouseEscaped(input: string, range: number): string {
  let arr = input.split("");

  let c = arr.indexOf("C");
  let m = arr.indexOf("m");
  let d = arr.indexOf("D");
  let r = range;

  if (isProtected(c, m, d)) {
    return "Protected!";
  } else if (inRange(c, m, r)) {
    return "Caught!";
  }

  return "Escaped!";
}

function inRange(catPos: number, mousePos: number, range: number): boolean {
  return Math.abs(catPos - mousePos) <= range;
}

function isProtected(catPos: number, mousePos: number, dogPos: number): boolean {
  let min = Math.min(catPos, mousePos);
  let max = Math.max(catPos, mousePos);

  return dogPos > min && dogPos < max;
}

main();
