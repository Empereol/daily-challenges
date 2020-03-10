/**
 * Daily Challenge #27 - Unlucky Days
 * https://dev.to/thepracticaldev/daily-challenge-27-unlucky-days-3n90
 *
 * Friday 13th or Black Friday is considered as an unlucky day.
 * Calculate how many unlucky days are in the given year.
 *
 * Can you find the number of Friday 13th in the given year? Good luck!
 *
 * Input: Year as an integer.
 * Output: Number of Black Fridays in the year as an integer.
 *
 * Examples:
 * unluckyDays(2015) == 3
 * unluckyDays(1986) == 1
 */

/**
 * Count how many Friday 13th's are in a given year
 * @param year Search year
 */
function unluckyDays(year: number, unluckyDayNum = 5): number {
  let unluckyDays = 0;

  for (let month = 0; month < 12; month++) {
    if (new Date(year, month, 13).getDay() === unluckyDayNum) unluckyDays++;
  }

  return unluckyDays;
}

console.log(unluckyDays(2015));
console.log(unluckyDays(1986));
