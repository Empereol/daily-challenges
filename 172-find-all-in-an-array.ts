// Daily Challenge #172 - Find All in an Array
// https://dev.to/thepracticaldev/daily-challenge-172-find-all-in-an-array-3nob

function findAll<T extends number | string>(input: T[], search: T): number[] {
  const found: number[] = [];

  input.forEach((val, idx) => {
    if (val === search) found.push(idx);
  });

  return found;
}


(function main(): void {
  const tests: [number[], number][] = [
    [[6, 9, 3, 4, 3, 82, 11], 3],
    [[10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16],
    [[20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20]
  ];

  for (const [input, search] of tests) {
    console.log(findAll(input as number[], search))
  }
})()
