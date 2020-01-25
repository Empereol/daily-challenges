// Setup
// For this challenge, you'll be thrown into a Pokemon battle! Calculate the damage that a particular move would do using the following formula:

// total damage = base damage * (attack / defense) * effectiveness

// base damage = the original power of the attack
// attack = your attack stat
// defense = the opponent's defense stat
// effectiveness = the effectiveness of the attack based on the type matchup

// Attacks can be super effective, neutral, or not very effective depending on the matchup.

// super effective : 2x damage
// neutral: 1x damage
// not very effective: 0.5x damage
// To prevent the challenge from being too tedious, you'll only deal with four types: fire, water, grass, and electric. Here are the matchups:

// fire > grass
// fire < water
// fire = electric
// water < grass
// water < electric
// grass = electric
// **Any type against itself is not very effective
// Overall, the function you implement must take in:

// your type
// the opponent's type
// attack power
// the opponent's defense
// ... and must output the total damage of the attack.

// Tests
// What are the total damage outputs of these attacks?

// "grass", "electric", 57, 19
// "grass", "water", 40, 40
// "grass", "fire", 35, 5
// "fire", "electric", 10, 2
// Good luck!

type ElementMap = { [key in Elemnt]: { [key in Elemnt]: Effectiveness } };

interface Pokemon {
  ap?: number;
  def?: number;
  element: Elemnt;
}

enum Elemnt {
  Fire = "fire",
  Water = "water",
  Grass = "grass",
  Electric = "electric"
}

enum Effectiveness {
  Super = 2,
  Neutral = 1,
  NotVery = 0.5
}

const ElementEffectivenessMap: ElementMap = {
  [Elemnt.Electric]: {
    [Elemnt.Electric]: Effectiveness.Neutral,
    [Elemnt.Fire]: Effectiveness.Neutral,
    [Elemnt.Grass]: Effectiveness.Neutral,
    [Elemnt.Water]: Effectiveness.Super
  },
  [Elemnt.Fire]: {
    [Elemnt.Electric]: Effectiveness.Neutral,
    [Elemnt.Fire]: Effectiveness.Neutral,
    [Elemnt.Grass]: Effectiveness.Super,
    [Elemnt.Water]: Effectiveness.NotVery
  },
  [Elemnt.Grass]: {
    [Elemnt.Electric]: Effectiveness.Neutral,
    [Elemnt.Fire]: Effectiveness.NotVery,
    [Elemnt.Grass]: Effectiveness.Neutral,
    [Elemnt.Water]: Effectiveness.Super
  },
  [Elemnt.Water]: {
    [Elemnt.Electric]: Effectiveness.NotVery,
    [Elemnt.Fire]: Effectiveness.Super,
    [Elemnt.Grass]: Effectiveness.NotVery,
    [Elemnt.Water]: Effectiveness.Neutral
  }
};

(function main(): void {
  const tests: { offense: Pokemon; defense: Pokemon; dmg: number }[] = [
    {
      dmg: 10,
      offense: { element: Elemnt.Grass, ap: 57 },
      defense: { element: Elemnt.Electric, def: 19 }
    },
    {
      dmg: 10,
      offense: { element: Elemnt.Grass, ap: 40 },
      defense: { element: Elemnt.Water, def: 40 }
    },
    {
      dmg: 10,
      offense: { element: Elemnt.Grass, ap: 35 },
      defense: { element: Elemnt.Fire, def: 5 }
    },
    {
      dmg: 10,
      offense: { element: Elemnt.Fire, ap: 10 },
      defense: { element: Elemnt.Electric, def: 2 }
    }
  ];

  for (const { dmg, offense, defense } of tests) {
    console.log(calculateDamage(dmg, offense, defense));
  }
})();

function calculateDamage(
  dmg: number,
  offense: Pokemon,
  defense: Pokemon
): number {
  return (
    dmg *
    (offense.ap / defense.def) *
    ElementEffectivenessMap[offense.element][defense.element]
  );
}
