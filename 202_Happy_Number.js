/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let number = n.toString();
  let store = {};

  while (1) {
    let tempn = 0;

    for (let i = 0; i < number.length; i++) {
      tempn += Math.pow(parseInt(number[i]), 2);
    }

    if (store[tempn] !== undefined) return false;
    if (tempn === 1) return true;
    else {
      store[tempn] = tempn;
      number = tempn.toString();
    }
  }

  return false;
};

console.log(isHappy(19));
console.log(isHappy(2));
