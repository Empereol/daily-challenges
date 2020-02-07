/*
Daily Challenge #181 - Is King in Check?
https://dev.to/thepracticaldev/daily-challenge-181-is-king-in-check-5d4k

Setup
Implement a function that takes for input an 8x8 chessboard in the form of a bi-dimensional array. 
It should return true if the black king is in check or false if it is not.

The array will include 64 squares which can contain the following characters:

♔ for the black King;
♛ for a white Queen;
♝ for a white Bishop;
♞ for a white Knight;
♜ for a white Rook;
♟ for a white Pawn;
a space if there is no piece on that square.

The board is oriented from Black's perspective. There will always be only one king (yours), 
all the other pieces will be white. Remember line of sight and attack patterns of chess pieces. 

Input will always be valid.
*/

enum BlackPiece {
  King = '♔'
}

enum WhitePiece {
  Queen = '♛',
  Bishop = '♝',
  Knight = '♞',
  Rook = '♜',
  Pawn = '♟'
}

type Vector = [number, number]; // [Row, Column]
type ChessPiece = BlackPiece | WhitePiece;

interface GamePiece {
  type: ChessPiece;
  pos: Vector;
}

/**
 * Determine if the Black King is in check by a White chess piece
 * @param chessboard
 */
function kingIsInCheck(chessboard: string[][]): boolean {
  // Check for squareness of the gameboard by comparing the amount
  // of cols of each row against the total amount of rows
  if (chessboard.every(row => row.length === chessboard.length)) {
    console.warn('Game board is invalid. Not square...');
    return false;
  }
  
  const attacker = findPiece(chessboard, Object.values(WhitePiece));

  if (!attacker) {
    console.warn('No attacker found! King cannot be in check if there are no enemies!');
    return false;
  }

  const player = findPiece(chessboard, [BlackPiece.King]);
  const attackerMoves = getAvailableAttacks(attacker, chessboard[0].length, chessboard.length);

  return attackerMoves.some(([row, col]) => row === player.pos[0] && col === player.pos[1]);
}

/**
 * Return the first search for chess piece found
 * @param chessboard
 * @param search Chess pieces to search the board for
 */
function findPiece(chessboard: string[][], search: ChessPiece[]): GamePiece {
  for (const [rowIdx, row] of Object.entries(chessboard)) {
    for (const [colIdx, col] of Object.entries(row)) {
      if (search.includes(col as ChessPiece)) {
        return {
          pos: [parseFloat(rowIdx), parseFloat(colIdx)],
          type: col as WhitePiece
        };
      }
    }
  }
}

/**
 * Get available attacks based on the provided game piece
 * Different pieces have different rules regarding their attack vectors
 * @param piece
 * @param maxWidth
 * @param maxHeight
 */
function getAvailableAttacks(piece: GamePiece, maxWidth: number = 8, maxHeight: number = 8): Vector[] {
  switch (piece.type) {
    case WhitePiece.Bishop: {
      return getBishopAttacks(piece.pos, maxWidth, maxHeight);
    }
    case WhitePiece.Pawn: {
      return getPawnAttacks(piece.pos);
    }
    case WhitePiece.Rook: {
      return getRookAttacks(piece.pos, maxWidth, maxHeight);
    }
    case WhitePiece.Queen: {
      return getQueenAttacks(piece.pos, maxWidth, maxHeight);
    }
    case WhitePiece.Knight: {
      return getKnightAttacks(piece.pos);
    }
  }
}

/**
 * Get all Pawn attack vectors
 * Pawns can only attack one diagonal vector away
 * Example:
 *     [3,2] [3,4]
 *        [4,3] ← Current position
 *     [5,2] [5,4]
 * @param param0 Starting vector
 * @param Attack direction. Either 1 (down) or -1 (up)
 */
function getPawnAttacks([pieceRow, pieceCol]: Vector, direction: number = 1): Vector[] {
  const left: Vector = [pieceRow + direction, pieceCol - 1];
  const rght: Vector = [pieceRow + direction, pieceCol + 1];

  return [left, rght];
}

/**
 * Get all Bishop attack vectors within gameboard
 * Bishops can attack all vectors diagonal to them
 * Example:
 *                 [0,7]
 * [1,0]         [1,6]
 *   [2,1]     [2,5]
 *     [3,2] [3,4]
 *        [4,3] ← Current position
 *     [5,2] [5,4]
 *   [6,1]     [6,5]
 * [7,0]         [7,6] *
 * For every row away, you subtract or add a column
 * @param param0 Starting vector
 * @param maxWidth Chessboard width
 * @param maxHeight Chessboard height
 */
function getBishopAttacks([pieceRow, pieceCol]: Vector, maxWidth: number, maxHeight: number): Vector[] {
  const attacks: Vector[] = [];

  for (let row = 0; row < maxHeight; row++) {
    for (let col = 0; col < maxWidth; col++) {
      const rowsFromPiece = Math.abs(row - pieceRow);

      if (col === pieceCol - rowsFromPiece || col === pieceCol + rowsFromPiece) {
        attacks.push([row, col]);
      }
    }
  }

  return attacks;
}

/**
 * Get all Rook attack vectors within gameboard
 * Rooks can attack all vectors of the same row or column
 * @param param0 Starting vector
 * @param maxWidth Chessboard width
 * @param maxHeight Chessboard height
 */
function getRookAttacks([pieceRow, pieceCol]: Vector, maxWidth: number, maxHeight: number): Vector[] {
  const attacks: Vector[] = [];

  for (let row = 0; row < maxHeight; row++) {
    for (let col = 0; col < maxWidth; col++) {
      if (col === pieceCol || row === pieceRow) {
        attacks.push([row, col]);
      }
    }
  }

  return attacks;
}

/**
 * Get all Queen attack vectors within gameboard
 * Queens can attack all diagonal and straight vectors (Like a Bishop + Rook)
 * @param param0 Starting vector
 * @param maxWidth Chessboard width
 * @param maxHeight Chessboard height
 */
function getQueenAttacks([pieceRow, pieceCol]: Vector, maxWidth: number, maxHeight: number): Vector[] {
  const diagonals: Vector[] = getBishopAttacks([pieceRow, pieceCol], maxWidth, maxHeight);
  const straights: Vector[] = getRookAttacks([pieceRow, pieceCol], maxWidth, maxHeight);

  return Array.from(new Set([...diagonals, ...straights]));
}

/**
 * Get all Knight attack vectors
 * @param param0 Starting vector
 */
function getKnightAttacks([pieceRow, pieceCol]: Vector): Vector[] {
  const ul: Vector = [pieceRow - 2, pieceCol - 1]; // Up Left
  const ur: Vector = [pieceRow - 2, pieceCol + 1]; // Up Right
  const dl: Vector = [pieceRow + 2, pieceCol - 1]; // Down Left
  const dr: Vector = [pieceRow + 2, pieceCol + 1]; // Down Right
  const ru: Vector = [pieceRow - 1, pieceCol + 2]; // Right Up
  const rd: Vector = [pieceRow + 1, pieceCol + 2]; // Right Down
  const lu: Vector = [pieceRow - 1, pieceCol - 2]; // Left Up
  const ld: Vector = [pieceRow + 1, pieceCol - 2]; // Left Down

  return [ul, ur, dl, dr, ru, rd, lu, ld];
}

(function main() {
  const tests = [
    [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '♛', ' ', ' ', ' ', ' '],
      [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '♟', ' ', ' ', ' ', ' '],
      [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', '♝'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', '♔', ' ', ' ', '♜', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', '♔', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['♞', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
  ];

  for (const test of tests) {
    console.log(kingIsInCheck(test));
  }
})();
