/**
 *  Check to see if the value is between the outside most posts
 * @param value
 * @param posts
 */
export function isBetween(value: number, posts: number[]): boolean {
  let min = Math.min(...posts);
  let max = Math.max(...posts);

  return value > min && value < max;
}

export default isBetween;
