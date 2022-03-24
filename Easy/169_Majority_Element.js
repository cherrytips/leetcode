/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = {};

  for (const num of nums) {
    if (count[num] === undefined) count[num] = 1;
    else count[num]++;

    if (count[num] >= nums.length / 2) return num;
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
