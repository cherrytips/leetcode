/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
var plusOne = function (digits) {
  let result = digits.reverse();

  result[0]++;

  for (let i = 0; result[i] === 10; i++) {
    result[i] = 0;

    if (result[i + 1] === undefined) result[i + 1] = 1;
    else result[i + 1]++;
  }

  result = result.reverse();

  return result;
};
*/

var plusOne = function (digits) {
  digits[digits.length - 1]++;

  for (let i = digits.length - 1; digits[i] === 10; i--) {
    digits[i] = 0;

    if (digits[i - 1] === undefined) digits.unshift(1);
    else digits[i - 1]++;
  }

  return digits;
};

let digits = [9, 9, 9, 9];
console.log(plusOne(digits));
