/**
 * Search a string for characters and return the amount found
 * @param input String to search
 * @param searches Characters to search for
 */
export function stringCount(input: string, ...searches: string[]): number {
  const search = searches.join('|');
  return (input.match(new RegExp(search, 'g')) || []).length;
}

export default stringCount;
