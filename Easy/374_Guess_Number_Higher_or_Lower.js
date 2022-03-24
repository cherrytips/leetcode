/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guess = function (num) {
  let pickNum = 256;

  if (num > pickNum) return -1;
  else if (num < pickNum) return 1;
  else return 0;
};

var guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let res = guess(mid);

    if (res === 0) return mid;
    else if (res < 0) high = mid - 1;
    else low = mid + 1;
  }

  return;
};

console.log(guessNumber(20000));
