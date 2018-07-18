const prompt = require('prompt');

const board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

const markBoard = (loc, icon) => {
  board[loc] = icon.toUpperCase();
};

const printBoard = () => {
  console.log(
    `
    -------------
    | ${board[1]} | ${board[2]} | ${board[3]} |
    -------------
    | ${board[4]} | ${board[5]} | ${board[6]} |
    -------------
    | ${board[7]} | ${board[8]} | ${board[9]} |
    -------------
    `
  );
};

const playable = (val) => {
  let x;
  if (isNaN(val)) {
    return false;
  }
  x = parseFloat(val);
  return (x | 0) === x;
}

const validateMove = (loc) => {
  return (playable(loc) && board[loc] === ' ');
}

const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const checkWinConditions = (player) => {
  for (let i = 0; i < winConditions.length; i++) {
    let moves = 0;
    for (let j = 0; j < winConditions[i].length; j++) {
      if (board[winConditions[i][j]] === player) {
        moves += 1;
      }
      if (moves === 3) {
        return true;
      }
    }
  }
  return false;
}

const checkTieCondition = () => {
  for (let i = 1; i <= Object.keys(board).length; i++) {
    if (board[i] === ' ') {
      return false;
    }
  }
  return true;
}

const takeTurn = (player) => {
  console.log(`It is player ${player}'s turn`);
  prompt.start();
  // prompt.get([''])
};
