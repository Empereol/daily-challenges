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

type ChessPiece = BlackPiece | WhitePiece;

interface GamePiece {
  type: ChessPiece;
  pos: [number, number];
}

function kingIsInCheck(chessboard: string[][]): boolean {
  const attacker = findPiece(chessboard, Object.values(WhitePiece));
  const player = findPiece(chessboard, [BlackPiece.King]);

  const attackerMoves = getAvailableMoves(attacker, chessboard[0].length, chessboard.length);

  return;
}

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

function getAvailableMoves(piece: GamePiece, maxWidth: number = 8, maxHeight: number = 8): [number, number][] {
  switch (piece.type) {
    case WhitePiece.Bishop: {
      return getBishopMoves(piece.pos, maxWidth, maxHeight);
    }
  }
}

function getBishopMoves([pRow, pCol]: [number, number], maxWidth: number, maxHeight: number): [number, number][] {
  const moves: [number, number][] = [];

  for (let row = 0; row < maxHeight; row++) {
    for (let col = 0; col < maxWidth; col++) {
      const rowsFromPiece = Math.abs(row - pRow);

      if (col === pCol - rowsFromPiece || col === pCol + rowsFromPiece) {
        moves.push([row, col]);
      }
    }
  }

  return moves;
}

const chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '♝', ' ', ' ', ' ', ' '],
  [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

// Valid bishop moves
/*
                  [0,7]
  [1,0]         [1,6]
    [2,1]     [2,5]
      [3,2] [3,4]
         [4,3]
      [5,2] [5,4]
    [6,1]     [6,5]
  [7,0]         [7,6]

  For every row away, you subtract or add a column
*/

kingIsInCheck(chessboard);
