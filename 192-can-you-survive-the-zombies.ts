/**
 * Daily Challenge #192 - Can you Survive the Zombies?
 * https://dev.to/thepracticaldev/daily-challenge-192-can-you-survive-the-zombies-5fkk
 *
 * Setup
 * Unfortunately, you have found yourself in a difficult situation.
 * You have injured your leg and are unable to walk.
 * A number n of zombies are shuffling towards you, intent on eating your brains.
 * Luckily, you've got your trusty rifle.
 *
 * The zombies will start at a range of r meters.
 * They will move at 0.5m per second. Each second, you shoot one zombie,
 * which depletes your ammo reserve a by 1 each shot. The remaining zombies shamble forward.
 * Since you're a good shot but also debilitated, there's a 5% chance you might miss.
 *
 * If any of the zombies manage to reach 0 meters, you get eaten and lose.
 * If you run out of ammo, you'll also get eaten.
 * Ignore any time that would be spent reloading.
 *
 * Write a function that accepts the total number of zombies n,
 * a range in meters r, and the number of bullets you have a.
 *
 * If you shoot all the zombies, return "You shot all X zombies."
 * If you get eaten before killing all the zombies, and before running out of ammo,
 * return "You shot X zombies before being eaten: overwhelmed."
 * If you run out of ammo before shooting all the zombies,
 * return "You shot X zombies before being eaten: ran out of ammo."
 * (If you run out of ammo at the same time as the remaining zombies reach you,
 * return "You shot X zombies before being eaten: overwhelmed.".)
 *
 * Example
 * zombie_shootout(3, 10, 10) => "You shot all 3 zombies."
 *
 * Tests
 * zombie_shootout(100, 8, 200)
 * zombie_shootout(50, 10, 8)
 */

/**
 * Determine if you live or die to zombies
 * @param zombieCount Number of zombies
 * @param range Range in meters
 * @param ammoCount Amount of ammo
 * @param zombiePace Zombie walking pace in meters (Default: 0.5)
 */
function zombieShootout(zombieCount: number, range: number, ammoCount: number, zombiePace = 0.5): string {
  let killedZombies = 0;
  let remainingAmmo = ammoCount;

  for (let r = range; r >= 0; r -= zombiePace) {
    if (r === 0 && killedZombies !== zombieCount) {
      return `You shot ${killedZombies} zombies before being eaten: overwhelmed.`;
    }

    if (remainingAmmo === 0 && killedZombies !== zombieCount) {
      return `You shot ${killedZombies} zombies before being eaten: ran out of ammo.`;
    }

    if (killedZombies === zombieCount) {
      return `You shot all ${killedZombies} zombies`;
    }

    remainingAmmo--;
    killedZombies += Math.random() > 0.05 ? 1 : 0;
  }
}

console.log(zombieShootout(3, 10, 10));
console.log(zombieShootout(100, 8, 200));
console.log(zombieShootout(50, 10, 8));
