/**
 * Daily Challenge #28 - Kill the Monster!
 * https://dev.to/thepracticaldev/daily-challenge-28-kill-the-monster-25d2
 *
 * You are fighting against a monster and are strong enough to kill it with a few hits.
 * But after every 3 punches you make, the monster hits you once.
 * Your health is $h; number of monsters is $m, damage that monster can give you is $dm.
 *
 * Write a function that will calculate: how many hits you received, how much damage you
 * received and your remaining health. If your health is <= 0, you die and function
 * should return "hero died".
 *
 * Examples
 * killMonsters(100, 3, 33); // => "hits: 0, damage: 0, health: 100"
 * killMonsters(50, 7, 10); // => "hits: 2, damage: 20, health: 30"
 *
 * Note: All numbers are strictly positive. Your function should always return a string.
 */

function killMonsters(
  playerHp: number,
  monsterCount: number,
  monsterDmg: number,
  hitSpeed = 3
): string {
  const hits = Math.floor((monsterCount - 1) / hitSpeed);
  const damage = hits * monsterDmg;
  const health = playerHp - damage;

  return health <= 0 ? 'Hero died' : `hits: ${hits}, damage: ${damage}, health: ${health}`;
}

console.log(killMonsters(100, 3, 33));
console.log(killMonsters(50, 7, 10));
