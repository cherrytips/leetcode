/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = "";
  let arr = [];
  let index = 0; // index of s
  let x = 0; // x direction
  let y = 0; // y direction
  let direction = 1;

  if (numRows === 1) return s;

  // arr init
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
  }

  /*
  save to arr by direction
  direction=1: down
  direction=-1: right up
  */
  while (1) {
    if (s[index] === undefined) break;

    if (direction === 1) {
      arr[y++][x] = s[index++];
      if (y === numRows) {
        y -= 2;
        x++;
        direction *= -1;
      }
    } else {
      arr[y--][x++] = s[index++];
      if (y === -1) {
        y += 2;
        x -= 1;
        direction *= -1;
      }
    }
  }

  // save to result
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].join("").toString();
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("AB", 1));
