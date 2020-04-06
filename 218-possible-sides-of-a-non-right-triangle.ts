/**
 * Daily Challenge #218 - Possible Sides of a Non-Right Triangle
 * https://dev.to/thepracticaldev/daily-challenge-218-possible-sides-of-a-non-right-triangle-1gcg
 *
 * Your strict math teacher is teaching you about right triangles and the
 * Pythagorean Theorem --> a^2 + b^2 = c^2 whereas a and b are the legs of the
 * right triangle and c is the hypotenuse of the right triangle.
 *
 * On the test, however, the question asks: What are the possible integer
 * lengths for the other side of the triangle?. Since you never learned anything
 * about that in class, you realize she meant What are the possible integer
 * lengths for the other side of the right triangle?.
 *
 * Because you want to address the fact that she asked the wrong question and
 * the fact that you're smart at math, you've decided to answer all the possible
 * values for the third side EXCLUDING the possibilities for a right triangle in
 * increasing order.
 *
 * Return your answer as a list of all the possible third side lengths of the
 * triangle without right triangles in increasing order.
 *
 * Examples
 * side_len(1, 1) --> [1]
 * side_len(3, 4) --> [2, 3, 4, 6]
 * side_len(4, 6) --> [3, 4, 5, 6, 7, 8, 9]
 *
 * Tests
 * side_len(5, 12)
 * side_len(8, 10)
 * side_len(3, 4)
 */

/**
 * Return a list of all possible third side lengths (integers) without right
 * trangles.
 *
 * @param sideA Integer
 * @param sideB Integer
 *
 * @throws {TypeError} If either sideA or sideB is not an integer.
 *
 * @example
 * sideLen(1, 1) → [1]
 * sideLen(3, 4) → [2, 3, 4, 6] // 5 is removed as it's a right triangle
 * sideLen(4, 6) → [3, 4, 5, 6, 7, 8, 9]
 */
function sideLen(sideA: number, sideB: number): number[] {
  if (!Number.isInteger(sideA) || !Number.isInteger(sideB)) {
    throw new TypeError('Both provided parameters must be integers');
  }

  const min = Math.abs(sideA - sideB) + 1;
  const max = sideA + sideB - 1;
  const hypot = Math.hypot(sideA, sideB);
  const lengths: number[] = [];

  for (let i = min; i <= max; i++) {
    if (i !== hypot) {
      lengths.push(i);
    }
  }

  return lengths;
}

/**
 * Return a list of all possible third side lengths (integers) without right
 * trangles.
 *
 * @param sideA Integer
 * @param sideB Integer
 *
 * @throws {TypeError} If either sideA or sideB is not an integer.
 *
 * @example
 * sideLen(1, 1) → [1]
 * sideLen(3, 4) → [2, 3, 4, 6] // 5 is removed as it's a right triangle
 * sideLen(4, 6) → [3, 4, 5, 6, 7, 8, 9]
 */
function sideLenII(sideA: number, sideB: number): number[] {
  if (!Number.isInteger(sideA) || !Number.isInteger(sideB)) {
    throw new TypeError('Both provided parameters must be integers');
  }

  const min = Math.abs(sideA - sideB);
  const max = sideA + sideB;

  const lengths: number[] = Array.from({ length: max - min - 1 }, (_, idx) => idx + min + 1);

  const hypotIdx = lengths.indexOf(Math.hypot(sideA, sideB));

  if (hypotIdx >= 0) {
    lengths.splice(hypotIdx, 1);
  }

  return lengths;
}

console.log(sideLen(1, 1)); // [1];
console.log(sideLen(3, 4)); // [2, 3, 4, 6];
console.log(sideLen(4, 6)); // [3, 4, 5, 6, 7, 8, 9];
