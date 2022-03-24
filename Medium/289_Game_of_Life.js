/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let m = board.length;
  let n = board[0].length;

  let temp = [];
  for (let i = 0; i < m; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) arr.push(0);

    temp.push(arr);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live_cnt = 0;
      let dead_cnt = 0;

      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (i + k < 0 || j + l < 0 || i + k >= m || j + l >= n) continue;
          else if (k === 0 && l === 0) continue;
          else if (board[i + k][j + l] === 1) live_cnt++;
          else if (board[i + k][j + l] === 0) dead_cnt++;
        }
      }

      if (board[i][j] === 1) {
        if (live_cnt < 2) temp[i][j] = 0;
        else if (live_cnt === 2 || live_cnt === 3) temp[i][j] = 1;
        else if (live_cnt > 3) temp[i][j] = 0;
      } else {
        if (live_cnt === 3) temp[i][j] = 1;
      }
    }
  }

  board = temp;
};

let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);
