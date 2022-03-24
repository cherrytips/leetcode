/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (1) {
    num = num.toString();

    if (num.length === 1) return num;
    let temp = 0;

    for (let i = 0; i < num.length; i++) {
      temp += parseInt(num[i]);
    }

    num = temp;
  }
};

let num = 38;
console.log(addDigits(num));
