/**
 * Daily Challenge #207 - Snakes and Ladders
 * https://dev.to/thepracticaldev/daily-challenge-207-snakes-and-ladders-5577
 */

/**
 * This needs some serious refactoring...
 */

const Links: Record<number, number> = {
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  16: 6,
  21: 42,
  28: 84,
  36: 44,
  46: 25,
  49: 11,
  51: 67,
  62: 19,
  64: 60,
  71: 91,
  74: 53,
  78: 98,
  87: 9,
  89: 68,
  92: 88,
  95: 75,
  99: 80
};

function play(): [number, boolean] {
  const die1 = Math.floor(Math.random() * 5 + 1);
  const die2 = Math.floor(Math.random() * 5 + 1);

  return [die1 + die2, die1 === die2];
}

function SnakesLadders(): void {
  const playerPos: Array<number> = [0, 0];
  let turn = 0;

  const timer = setInterval(() => {
    let turnLog: string = '';

    const move = play();
    playerPos[turn] += move[0];

    turnLog += `Player ${turn + 1}'s turn : ${move[0]}\n`;

    if (move[1]) turnLog += `Player ${turn + 1} rolled doubles!\n`;

    if (playerPos[turn] > 100) {
      turnLog += `Player ${turn + 1} bounces off from ${playerPos[turn]} to ${(playerPos[turn] =
        200 - playerPos[turn])}\n`;
    }

    if (Links[playerPos[turn]]) {
      let verb: 'snaked' | 'laddered';

      if (playerPos[turn] > Links[playerPos[turn]]) {
        verb = 'snaked';
      } else {
        verb = 'laddered';
      }

      turnLog += `Player ${turn + 1} is ${verb} from ${playerPos[turn]} to ${(playerPos[turn] =
        Links[playerPos[turn]])}\n`;
    }

    if (playerPos[turn] == 100) {
      turnLog += `Player ${turn + 1} wins! Game over for Player ${2 - turn}\n`;
      clearInterval(timer);
    }

    if (!move[1]) {
      turn = 1 - turn;
    }

    turnLog += `Player 1 is on square ${playerPos[0]}\n`;
    turnLog += `Player 2 is on square ${playerPos[1]}\n`;

    console.log(turnLog);
  }, 1000);
}

(function Main(): void {
  SnakesLadders();
})();
