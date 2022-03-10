/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Version 1
var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    if (nums2[nums2.length - n] === undefined) break;

    nums1[i] = nums2[nums2.length - n];

    n--;
    if (n === 0) break;
  }

  nums1.sort((a, b) => a - b);
};

// Version 2
var merge = function (nums1, m, nums2, n) {
  while (n !== 0) {
    nums1[m++] = nums2[nums2.length - n--];
  }

  nums1.sort((a, b) => a - b);
};
