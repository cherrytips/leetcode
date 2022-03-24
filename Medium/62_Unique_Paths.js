/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Brute-Force Recursive
/*
var uniquePaths = function (m, n, currX = 0, currY = 0) {
  if (currX >= m || currY >= n) return 0; // Are we out of bound? Return 0.
  if (currX === m - 1 && currY === n - 1) return 1; // Have we reached the end? Return 1.
  
  return uniquePaths(m, n, currX + 1, currY) + uniquePaths(m, n, currX, currY + 1);
};
*/
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  const map = new Array(m).fill(new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1];
    }
  }

  return map[m - 1][n - 1];
};

let m = 3;
let n = 7;
console.log(uniquePaths(m, n));
