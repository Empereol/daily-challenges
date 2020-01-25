// Daily Challenge #170 - Pokemon Damage Calculator
// https://dev.to/thepracticaldev/daily-challenge-170-pokemon-damage-calculator-97d

type ElementMap = { [key in Elemnt]: { [key in Elemnt]: Effectiveness } };
type EffectivenessMap = { [key in Effectiveness]: string };

interface Combatant {
  name: string;
  element: Elemnt;
}

interface Attacker extends Combatant {
  ap: number;
}

interface Defender extends Combatant {
  ar: number;
}

interface Combat {
  dmg: number;
  attacker: Attacker;
  defender: Defender;
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

const EffectivenessMsg: EffectivenessMap = {
  [Effectiveness.Super]: "It was super effective!",
  [Effectiveness.NotVery]: "It was not very effective...",
  [Effectiveness.Neutral]: ""
};

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
  const combats: Combat[] = [
    { 
      dmg: 10, 
      attacker: { name: "Bulbasaur", ap: 57, element: Elemnt.Grass }, 
      defender: { name: "Pikachu", ar: 19,element: Elemnt.Electric }
    },
    {
      dmg: 10,
      attacker: { name: "Bulbasaur", ap: 40, element: Elemnt.Grass },
      defender: { name: "Squirtle", ar: 40, element: Elemnt.Water }
    },
    {
      dmg: 10,
      attacker: { name: "Bulbasaur", ap: 35, element: Elemnt.Grass },
      defender: { name: "Charmander", ar: 5, element: Elemnt.Fire }
    },
    {
      dmg: 10,
      attacker: { name: "Charmander", ap: 10, element: Elemnt.Fire },
      defender: { name: "Pikachu", ar: 2, element: Elemnt.Electric }
    }
  ];

  for (const { dmg, attacker, defender } of combats) {
    console.log(combat(dmg, attacker, defender), {dmg, attacker, defender});
  }
})();

function combat(dmg: number, attacker: Attacker, defender: Defender): string {
  const effectiveness = ElementEffectivenessMap[attacker.element][defender.element];
  const totalDmg = totalDamage(dmg, attacker.ap, defender.ar, effectiveness);

  return `${attacker.name} (${attacker.element}) strikes ${defender.name} (${defender.element}) for ${totalDmg} damage. ${EffectivenessMsg[effectiveness]}`;
}

function totalDamage(dmg: number, attackPower: number, armorRating: number, multiplier: number): number {
  return dmg * (attackPower / armorRating) * multiplier;
}
