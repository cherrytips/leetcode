/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let idx = 0,
    left = 0,
    right = nums.length - 1;

  while (idx <= right && left < right) {
    if (nums[idx] === 2) {
      [nums[idx], nums[right]] = [nums[right], nums[idx]];
      right--;
    } else if (nums[idx] === 0) {
      [nums[idx], nums[left]] = [nums[left], nums[idx]];
      left++;
      idx++;
    } else {
      idx++;
    }
  }

  return nums;
};

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
