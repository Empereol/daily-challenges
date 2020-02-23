/**
 * Daily Challenge #16 - Number of People on the Bus
 * https://dev.to/thepracticaldev/daily-challenge-16-number-of-people-on-the-bus-dik
 *
 * There is a bus moving in the city, and it takes and drop some people at each bus stop.
 * You are provided with a list (or array) of integer arrays (or tuples).
 * Each integer array has two items which represent the number of people that
 * get on the bus (The first item) and the number of people that get off the
 * bus (The second item) at a bus stop.
 *
 * Your task is to return number of people who are still left on the bus after the last
 * bus station (after the last array).
 */

/**
 * Calculate how many people are on the bus after a series of transactions
 * @param transactions List of tuples. [GotOnTheBus, GotOffTheBus]
 */
function onTheBus(...transactions: [number, number][]): number {
  return transactions.reduce((onBus, [on, off]) => onBus + on - off, 0);
}

console.log(onTheBus([1, 0], [2, 1], [5, 3], [4, 2]));
