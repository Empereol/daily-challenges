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
 */
function getPawnAttacks([pieceRow, pieceCol]: Vector): Vector[] {
  // Not sure if we need to waste time fitlering out invalid/offboard spaces like [-1, 0]...
  const upLeft: Vector = [pieceRow - 1, pieceCol - 1];
  const upRight: Vector = [pieceRow - 1, pieceCol + 1];
  const bottomLeft: Vector = [pieceRow + 1, pieceCol - 1];
  const bottomRight: Vector = [pieceRow + 1, pieceCol + 1];

  return [upLeft, upRight, bottomLeft, bottomRight];
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
  const upLeft: Vector = [pieceRow - 2, pieceCol - 1];
  const upRight: Vector = [pieceRow - 2, pieceCol + 1];
  const downLeft: Vector = [pieceRow + 2, pieceCol - 1];
  const downRight: Vector = [pieceRow + 2, pieceCol + 1];
  const rightUp: Vector = [pieceRow - 1, pieceCol + 2];
  const rightDown: Vector = [pieceRow + 1, pieceCol + 2];
  const leftUp: Vector = [pieceRow - 1, pieceCol - 2];
  const leftDown: Vector = [pieceRow + 1, pieceCol - 2];

  return [upLeft, upRight, downLeft, downRight, rightUp, rightDown, leftUp, leftDown];
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
