/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  let index = 0;
  let carry_over = false;
  let result = [];
  let result_str = "";

  do {
    if (a[index] === undefined) a[index] = "0"; // block carry over missing
    if (b[index] === undefined) b[index] = "0";
    let sum = parseInt(a[index]) + parseInt(b[index]);
    if (carry_over) sum++;

    switch (sum) {
      case 2:
        carry_over = true;
        result.unshift(0);
        break;
      case 1:
        carry_over = false;
        result.unshift(1);
        break;
      case 0:
        carry_over = false;
        result.unshift(0);
        break;
      default:
        carry_over = true;
        result.unshift(1);
        break;
    }

    index++;
  } while (!(a[index] === undefined && b[index] === undefined) || carry_over);

  result.forEach((bin) => {
    result_str += bin;
  }); // to String

  return result_str;
};

let a = "100";
let b = "110010";
console.log(addBinary(a, b));

var addBinary_1 = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

console.log(addBinary_1(a, b));
