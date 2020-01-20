/**
 * Check to see if the distance between position1 and position2 is within the specified range
 * @param pos1 Position 1
 * @param pos2 Position 2
 * @param range Range
 */
export function inRange(pos1: number, pos2: number, range: number): boolean {
  return Math.abs(pos1 - pos2) <= range;
}

export default inRange;
