/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = [];
  let rev = true;
  result = '';

  for (var i = 0; i < s.length; i += k) {
    arr.push(s.slice(i, i + k).split(''));
  }

  arr.forEach((element) => {
    if (rev === true) {
      result += element.reverse().join('');
      rev = false;
    } else {
      result += element.join('');
      rev = true;
    }
  });

  return result;
};

let s = 'abcdefg';
let k = 2;

console.log(reverseStr(s, k));
