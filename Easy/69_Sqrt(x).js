/**
 * @param {number} x
 * @return {number}
 */
// 바빌로니아 법 사용
// Using The Babylonian Method
// x2 = (x1 + a / x1) / 2; --> x2: after value, x1: before value, a: input value
var mySqrt = function (x) {
  if (x === 0) return 0;
  
  let s;
  let s1 = x / 2; // init to middle
  do {
    s = s1; // before value
    s1 = (s + x / s) / 2;
  } while (s !== s1);

  return Math.floor(s);
};

let x = 0;
console.log(mySqrt(x));
