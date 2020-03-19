/**
 * Daily Challenge #208 - Delete Occurrences of an Element
 * https://dev.to/thepracticaldev/daily-challenge-208-delete-occurrences-of-an-element-19e1
 *
 * Given a list lst and a number N, create a new list that contains each number in lst at
 * most N times without reordering.
 *
 * For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], skip the
 * next 1 and 2 because this would lead to those numbers being in the result more than N times.
 * Finally, take 3, which leads to [1,2,3,1,2,3].
 *
 * deleteNth([1,1,1,1],2) // return [1,1]
 * deleteNth([20,37,20,21],1) // return [20,37,21]
 *
 * Tests
 * deleteNth([20,37,20,21], 1)
 * deleteNth([1,1,3,3,7,2,2,2,2], 3)
 */

function deleteNth(lst: number[], n: number): number[] {
  return lst.reduce(
    (arr, cur) => (arr.filter(i => i === cur).length < n ? [...arr, cur] : arr),
    []
  );
}

(function Main(): void {
  const tests: [[number[], number], number[]][] = [
    [
      [[1, 1, 1, 1], 2],
      [1, 1]
    ],
    [
      [[20, 37, 20, 21], 1],
      [20, 37, 21]
    ],
    [
      [[1, 1, 3, 3, 7, 2, 2, 2, 2], 3],
      [1, 1, 3, 3, 7, 2, 2, 2]
    ]
  ];

  for (const [test, expected] of tests) {
    const result = deleteNth(...test);

    console.log(result.join() === expected.join() ? 'PASS' : 'FAIL', { test, expected, result });
  }
})();
