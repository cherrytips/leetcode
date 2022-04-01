/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let answer = [];

  for (let i = 0; s.length >= 10; i = 0) {
    if (s.indexOf(s.slice(0, 10)) !== s.lastIndexOf(s.slice(0, 10))) {
      if (answer.indexOf(s.slice(0, 10)) === -1) answer.push(s.slice(0, 10));
    }

    s = s.slice(1, s.length);
  }

  return answer;
};

let s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
console.log(findRepeatedDnaSequences(s));

let s_1 = 'GAGAGAGAGAGAG';
console.log(findRepeatedDnaSequences(s_1));
