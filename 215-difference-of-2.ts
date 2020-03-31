/**
 * Daily Challenge #215 - Difference of 2
 * https://dev.to/thepracticaldev/daily-challenge-215-difference-of-2-37ka
 *
 * The objective is to implement a function that will return all pairs of
 * integers from a given array of integers that have a difference of 2. The
 * result array should be sorted in ascending order of values.
 *
 * Assume there are no duplicate integers in the array. The order of the
 * integers in the input array should not matter.
 *
 * Examples
 * [1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
 * [4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
 * [1, 23, 3, 4, 7]  -->  [[1, 3]]
 * [4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]
 *
 * Tests
 * pairDifference([1,2,3,4])
 * pairDifference([1,3,4,6])
 */

/**
 * Join all pairs of integers from a given array of integers that match the
 * specified difference.
 *
 * @param numbers Array of numbers to attempt to pair
 * @param difference The difference value to pair against (default: `2`)
 *
 * @returns Array of number pairs that match the specified difference
 *
 * @example
 * pairDifference([1, 2, 3, 4]) === [[1, 3], [2, 4]]
 * pairDifference([4, 1, 2, 3]) === [[1, 3], [2, 4]]
 * pairDifference([1, 23, 3, 4, 7]) === [[1, 3]]
 * pairDifference([4, 3, 1, 5, 6]) === [[1, 3], [3, 5], [4, 6]]
 */
function pairDifference(numbers: number[], difference = 2): number[][] {
  return numbers
    .sort((a, b) => a - b)
    .reduce((result, num, idx, array) => {
      const pairIdx = array.indexOf(num + difference, idx);
      return pairIdx > 0 ? [...result, [num, array[pairIdx]]] : result;
    }, []);
}
