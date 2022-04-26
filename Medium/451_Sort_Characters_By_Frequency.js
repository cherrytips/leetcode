/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let answer = '';
  let alph = {};

  for (let i = 0; i < s.length; i++) {
    if (alph[s[i]] === undefined) alph[s[i]] = 1;
    else alph[s[i]]++;
  }

  let alph_arr = Object.keys(alph);
  let alph_cnt = Object.values(alph).sort((a, b) => a - b);

  while (alph_arr.length !== 0) {
    for (let i = 0; i < alph_arr.length; i++) {
      if (alph[alph_arr[i]] === alph_cnt[alph_cnt.length - 1]) {
        for (let j = 0; j < alph[alph_arr[i]]; j++) answer += alph_arr[i];
        alph_arr = alph_arr.slice(0, i).concat(alph_arr.slice(i + 1));
        alph_cnt.pop();
        i--;
      }
    }
  }

  return answer;
};

let s = 'tree';
console.log(frequencySort(s));
