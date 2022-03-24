/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result[i] = [1];
      continue;
    }
    result[i] = [];
    result[i].push(1);
    for (let j = 1; j < i; j++) {
      result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    result[i].push(1);
  }

  return result;
};

console.log(generate(5));
