/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = [];
  let minus = "";
  let result = "";

  // num init
  for (const n of x.toString()) {
    num.push(n);
  }

  // minus check
  if (x < 0) minus = num.shift();

  // position change
  for (let i = 0; i < num.length / 2; i++) {
    let temp = num[i];
    num[i] = num[num.length - i - 1];
    num[num.length - i - 1] = temp;
  }

  // if minus => add minus
  if (minus === "-") result += minus;

  // set result
  for (let i = 0; i < num.length; i++) {
    // first zero => not contain
    if (result === "-" && num[i] === "0") continue;
    result += num[i];
  }

  // change to int
  result = parseInt(result);

  // 32-bit digit check
  if (Math.pow(-2, 31) > result || Math.pow(2, 31) < result) return 0;

  return result;
};

console.log(reverse(-120));
