/**
 * Daily Challenge #198 - 21 Blackjack
 * https://dev.to/thepracticaldev/daily-challenge-198-21-blackjack-31mg
 *
 * Implement a function that determines the score of a hand in the card game 21 Blackjack.
 *
 * The function will receive an array filled with strings that represent each card in the hand.
 * Your function should return the score of the hand as an integer.
 *
 * Number cards count as their face value (2 through 10). Jack, Queen and King count as 10.
 * An Ace can be counted as either 1 or 11.
 *
 * Return the highest score of the cards that is less than or equal to 21. If there is no score
 * less than or equal to 21 return the smallest score more than 21.
 *
 * Examples
 * ["A"] ==> 11
 * ["5", "4", "3", "2", "A", "K"] ==> 25
 *
 * Tests
 * ["A", "J"]
 * ["A", "10", "A"]
 * ["5", "3", "7"]
 */

type Cards = 'J' | 'Q' | 'K' | 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

const FaceCards: Partial<Record<Cards, number>> = {
  J: 10,
  Q: 10,
  K: 10,
  A: 1
};

/**
 * Determine the optimal Blackjack score from a provided set of cards
 * Returns the highest score of the cards that is less than or equal to 21.
 * If there is no score less than or equal to 21, returns the smallest score more than 21.
 * @param cards Cards dealt to player
 */
function blackjackScore(cards: Cards[]): number {
  // Get a base score by summing all cards
  let score = cards
    .map(card => FaceCards[card] || Number(card)) // Map each card to it's value
    .reduce((total, cur) => (total += cur), 0); // Reduce it to its sum

  // If we're not maxed out. See if we can optimize our Aces
  if (score < 21) {
    for (const card of cards.filter(card => card === 'A')) {
      // For each Ace found add the Ace Bonus if it won't cause us to bust
      // (10 on top of it's already 1 given totalling 11)
      if (score <= 11) {
        score += 10;
      }
    }
  }

  return score;
}

(function main(): void {
  const tests: [Cards[], number][] = [
    [['A'], 11],
    [['5', '4', '3', '2', 'A', 'K'], 25],
    [['A', 'J'], 21],
    [['A', '10', 'A'], 12],
    [['5', '3', '7'], 15]
  ];

  for (const [test, expected] of tests) {
    console.log(blackjackScore(test) === expected ? 'PASS' : 'FAIL', {
      test: test.join(),
      expected,
      result: blackjackScore(test)
    });
  }
})();
