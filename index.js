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
printBoard();
