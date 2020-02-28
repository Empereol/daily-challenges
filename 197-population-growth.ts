/**
 * Daily Challenge #197 - Population Growth
 * https://dev.to/thepracticaldev/daily-challenge-197-population-growth-e4p
 *
 * Setup
 * Implement a function to calculate the growth of a population of people. The function should be able to take
 * several parameters, including p0(starting population), percent, aug(inhabitants coming or leaving each year),
 * and p(population to surpass). This function should output n(number of years needed to get a population of p).
 *
 * Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter
 * percent is 2 you have to convert it to 0.02.
 *
 * Example
 * In our example, the population is p0 = 1000 at the beginning of a year. The population regularly increases
 * by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
 *
 * How many years need to pass for the town to see its population greater or equal to p = 1200 inhabitants?
 *
 * At the end of the first year there will be:
 * 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
 *
 * At the end of the 2nd year there will be:
 * 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
 *
 * At the end of the 3rd year there will be:
 * 1141 + 1141 * 0.02 + 50 => 1213
 *
 * It will need 3 entire years.
 *
 * Tests
 * nbYear(1500, 5, 100, 5000)
 * nbYear(1500000, 2.5, 10000, 2000000)
 * nbYear(1500000, 0.25, 1000, 2000000)
 */

function nbYear(p0: number, pct: number, aug: number, p: number): number {
  pct /= 100;

  // Mathematic equation version
  return Math.ceil(
    Math.log((aug + pct * p) / (aug + pct * p0)) / Math.log(1 + pct)
  );

  // Simple loop version
  // let year = 0;
  // let currentPop = p0;

  // while (currentPop < p) {
  //   year++;
  //   currentPop += currentPop * pct + aug;
  // }

  // return year;
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
