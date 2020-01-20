// Daily Challenge #165 - Password Lost in a Grid
// https://dev.to/thepracticaldev/daily-challenge-165-password-lost-in-a-grid-11af

interface Directions {
  Up: "up";
  Right: "right";
  Down: "down";
  Left: "left";
}

interface PasswordDirection {
  UpT: "upT";
  RightT: "rightT";
  DownT: "downT";
  LeftT: "leftT";
}

function getPassword(grid: Array<string[]>, directions: Array<Directions | PasswordDirection>): string {
    return;
}
