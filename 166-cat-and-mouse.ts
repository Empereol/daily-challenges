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

function main() {
  const games: { s: string; r: number }[] = [
    { s: ".....C............m......", r: 5 },
    { s: "...m.........C...D", r: 10 },
    { s: "...m....D....C.......", r: 10 }
  ];

  games.forEach(g => console.log(g, mouseEscaped(g.s, g.r)));
}

main();