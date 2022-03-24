/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};

  for (const alph of s) {
    if (map[alph] === undefined) map[alph] = 1;
    else if (map[alph] === 1) map[alph] = -1;
  }

  for (const key in map) {
    if (map[key] === 1) return s.indexOf(key);
  }

  return -1;
};

let s = 'leetcode';
console.log(firstUniqChar(s));
