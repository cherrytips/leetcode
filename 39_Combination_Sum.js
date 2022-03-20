/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  for (let i = 0; i < candidates.length; i++) {
    let max_count = Math.floor(target / candidates[i]);
    console.log(max_count);

    for (let j = 0; j < max_count; j++) {
      let index = candidates.indexOf(target - candidates[i] * j, i);
      let arr = [];

      if (target === candidates[i] * j) {
        for (let k = 0; k < j; k++) arr.push(candidates[i]);

        result.push(arr);
      } else if (index !== -1) {
        for (let k = 0; k < j; k++) arr.push(candidates[i]);

        arr.push(candidates[index]);

        result.push(arr);
      }
    }
  }

  return result;
};

let candidates = [2, 3, 6, 7];
let target = 7;

console.log(candidates);

console.log(combinationSum(candidates, target));
