/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left !== right) {
    if (nums[left] < nums[right]) left++;
    else right--;
  }

  return left;
};

let nums = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums));
