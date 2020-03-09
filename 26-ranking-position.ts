/**
 * Daily Challenge #26 - Ranking Position
 * https://dev.to/thepracticaldev/daily-challenge-26-ranking-position-3c72
 *
 * Today, let's get a little creative and develop a ranking system where we can sort points and calculate
 * the position of an individual or a team competing in a game/competition.
 *
 * Note:
 * If two or more persons have the same number of points, they should have same position number and sorted
 * by name (name is unique).
 *
 * For example, Input structure:
 * [
 *   {
 *     name: "John",
 *     points: 100,
 *   },
 *   {
 *     name: "Bob",
 *     points: 130,
 *   },
 *   {
 *     name: "Mary",
 *     points: 120,
 *   },
 *   {
 *     name: "Kate",
 *     points: 120,
 *   },
 * ]
 *
 * Output should be:
 * [
 *   {
 *     name: "Bob",
 *     points: 130,
 *     position: 1,
 *   },
 *   {
 *     name: "Kate",
 *     points: 120,
 *     position: 2,
 *   },
 *   {
 *     name: "Mary",
 *     points: 120,
 *     position: 2,
 *   },
 *   {
 *     name: "John",
 *     points: 100,
 *     position: 4,
 *   },
 * ]
 */

interface Player {
  name: string;
  points: number;
}

interface RankedPlayer extends Player {
  position: number;
}

const Players: Player[] = [
  {
    name: 'John',
    points: 100
  },
  {
    name: 'Bob',
    points: 130
  },
  {
    name: 'Mary',
    points: 120
  },
  {
    name: 'Kate',
    points: 120
  }
];

/**
 * Sort a list of players by score. If tie, sort by name.
 * @param players List of Players
 */
function sortPlayers(players: Player[]): Player[] {
  return players.sort((a, b) => {
    if (a.points === b.points) {
      return a.name > b.name ? 1 : -1;
    }

    return a.points - b.points;
  });
}

/**
 * Create a sorted list of RankedPlayers from a list of players
 * @param players List of players
 */
function getRankedPlayers(players: Player[]): RankedPlayer[] {
  const sortedPlayers = sortPlayers(players);

  let ranked: RankedPlayer[] = [];
  for (let i = 0, position = 1; i < sortedPlayers.length; i++) {
    ranked.push({ ...sortedPlayers[i], position });

    if (sortedPlayers[i + 1]?.points !== sortedPlayers[i].points) {
      position++;
    }
  }

  return ranked;
}

console.log(getRankedPlayers(Players));
// getRankedPlayers(Players);
