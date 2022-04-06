/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let answer = 0;

  nums = nums.sort((a, b) => b - a);

  answer = nums[k - 1];

  return answer;
};

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k));
