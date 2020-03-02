/**
 * Daily Challenge #199 - List of All Rationals
 * https://dev.to/thepracticaldev/daily-challenge-199-list-of-all-rationals-32h3
 * Implement a function that will construct a list containing every positive rational number:
 *
 * Build a binary tree where each node is a rational and the root is 1/1, with the following rules for creating the nodes below:
 *
 * The value of the left-hand node below a/b is a/a+b
 * The value of the right-hand node below a/b is a+b/b
 * So the tree will look like this:
 *
 *                        1/1
 *                   /           \
 *             1/2                  2/1
 *            /    \              /     \
 *        1/3        3/2        2/3       3/1
 *       /   \      /   \      /   \     /   \
 *    1/4    4/3  3/5   5/2  2/5   5/3  3/4   4/1
 * Now traverse the tree, breadth first, to get a list of rationals.
 *
 * [ 1/1, 1/2, 2/1, 1/3, 3/2, 2/3, 3/1, 1/4, 4/3, 3/5, 5/2, .. ]
 * Every positive rational will occur, in its reduced form, exactly once in the list, at a finite index.
 *
 * We will use tuples of type [ Number, Number ] to represent rationals, where [a,b] represents a / b
 *
 * Use this method to create an infinite list of tuples:
 * function* allRationals() => [Number,Number] // forever
 * matching the list described above:
 *
 * allRationals => [ [1,1], [1,2], [2,1], [1,3], [3,2], .. ]
 *
 * Tests
 * a = { 0: [1,1], 3: [1,3], 4: [3,2], 10: [5,2] }
 * a = { 100: [19,12], 1000: [39,28], 10000: [205,162], 100000: [713,586] }
 */

function* allRationals(
  start: number,
  amount: number
): Generator<[number, number], [number, number], void> {
  let rationals: [number, number][] = [[1, 1]];

  let i = 0;
  while (true) {
    const rational = rationals[i];
    rationals.push([rational[0], rational[0] + rational[1]]);
    rationals.push([rational[0] + rational[1], rational[1]]);

    if (i >= start) {
      yield rational;
    }

    if (i === start + amount - 1) {
      return rational;
    }

    i++;
  }
}
for (const rational of allRationals(0, 101)) {
  console.log(rational);
}
