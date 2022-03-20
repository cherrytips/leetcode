/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let result = true;
  // row check
  board.forEach((element) => {
    let row_map = {};

    for (let i = 0; i < element.length; i++) {
      if (row_map[element[i]] === 1) result = false;
      if (element[i] !== '.') row_map[element[i]] = 1;
    }
  });

  if (!result) return result;

  // column check
  for (let i = 0; i < board.length; i++) {
    let column_map = {};

    for (let j = 0; j < board[i].length; j++) {
      if (column_map[board[j][i]] === 1) result = false;
      if (board[j][i] !== '.') column_map[board[j][i]] = 1;
    }
  }

  if (!result) return result;

  // 3x3 box check
  let box_arr = [];
  let cut = 3;

  for (let i = 0; i < 9; i++) {
    box_arr[i] = [];
  }

  while (cut <= 9) {
    for (let i = cut - 3; i < cut; i++) {
      box_arr[cut - 3] = box_arr[cut - 3].concat(board[i].slice(0, 3));
      box_arr[cut - 2] = box_arr[cut - 2].concat(board[i].slice(3, 6));
      box_arr[cut - 1] = box_arr[cut - 1].concat(board[i].slice(6));
    }
    cut += 3;
  }

  console.log(box_arr);

  box_arr.forEach((element) => {
    let box_map = {};

    for (let i = 0; i < element.length; i++) {
      if (box_map[element[i]] === 1) result = false;
      if (element[i] !== '.') box_map[element[i]] = 1;
    }
  });

  return result;
};

let board = [
  ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
  ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
  ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];
console.log(isValidSudoku(board));
