/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) map[nums[i]] = 1;
    else if (map[nums[i]] === 1) return nums[i];
  }
};

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
