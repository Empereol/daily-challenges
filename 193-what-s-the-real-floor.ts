/**
 * Daily Challenge #193 - What's the Real Floor?
 * https://dev.to/thepracticaldev/daily-challenge-193-what-s-the-real-floor-3jng
 *
 * Setup
 * Americans can be weird sometimes.
 * The first floor of a building is typically referred to as the ground floor.
 * In some American buildings, there is no 13th floor because of old superstitions.
 *
 * Implement a function that takes an American floor passed as an integer and
 * returns the actual floor number. Your function should also work for basement floors.
 *
 * Examples
 * getRealFloor(1) == 0
 * getRealFloor(0) == 0
 * getRealFloor(5) == 4
 * getRealFloor(15) == 13
 * getRealFloor(-3) == -3
 *
 * Tests
 * getRealFloor(3)
 * getRealFloor(7)
 * getRealFloor(20)
 * getRealFloor(1)
 * getRealFloor(-6)
 */

/**
 * Return the actual floor number from the provided "American floor"
 * The first floor of a building is typically referred to as the ground floor.
 * There is no 13th floor because of old superstitions.
 * @param americanFloor
 */
function getRealFloor(americanFloor: number): number {
  let realFloor = americanFloor;

  if (realFloor > 0) realFloor -= 1;
  if (realFloor >= 13) realFloor -= 1;

  return realFloor;
}

(function main(): void {
  const tests: [number, number][] = [
    [1, 0],
    [0, 0],
    [5, 4],
    [15, 13],
    [-3, -3],
    [3, 2],
    [7, 6],
    [20, 18],
    [-6, -6]
  ];

  for (const [test, expected] of tests) {
    console.log(getRealFloor(test) === expected ? 'PASS' : 'FAIL', { test, expected, result: getRealFloor(test) });
  }
})();
