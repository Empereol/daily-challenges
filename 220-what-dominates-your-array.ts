/**
 * Daily Challenge #220 - What Dominates Your Array?
 * https://dev.to/thepracticaldev/daily-challenge-220-what-dominates-your-array-19ne
 *
 * An array arr consisting of n integers is given. The dominator of arr is the
 * value that occurs in more than half of the elements of arr.
 *
 * Write a function dominator(arr) that returns the dominator of arr. The
 * function should return −1 if array does not have a dominator. All values in
 * arr will be >=0.
 *
 * For example, consider the array such that arr = [3,4,3,2,3,1,3,3]
 * The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and
 * 5 is more than half of 8.
 *
 * dominator([3,4,3,2,3,1,3,3]) => 3
 * dominator([1,2,3,4,5]) => -1
 *
 * Tests:
 * dominator([3,4,3,2,3,1,3,3])
 * dominator([1,1,1,2,2,2]),
 * dominator([1,1,1,2,2,2,2])
 */

/**
 * Return the dominator of the given array.
 *
 * The dominator is the value that occurs in more than half of the elements of
 * the given array.
 *
 * @param nums Array of numbers.
 *
 * @returns `-1` if there is no dominator.
 *
 * @example
 * dominator([3,4,3,2,3,1,3,3]) → 3
 * dominator([1,2,3,4,5])       → -1 // No val occurs more than half the array
 */
function dominator(nums: number[]): number {
  for (const item of new Set(nums)) {
    if (nums.filter(i => i === item).length > nums.length / 2) {
      return item;
    }
  }

  return -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
console.log(dominator([1, 2, 3, 4, 5]));
