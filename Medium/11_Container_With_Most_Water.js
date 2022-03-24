/**
 * @param {number[]} height
 * @return {number}
 */
/*
var maxArea = function (height) {
  let max = Number.MIN_SAFE_INTEGER;
  let min_h = height[0];

  for (let i = 0; i < height.length - 1; i++) {
    if (min_h > height[i]) continue;

    for (let j = i + 1; j < height.length; j++) {
      let less = height[i] < height[j] ? height[i] : height[j];
      let area = (j - i) * less;

      if (area > max) max = area;
    }

    min_h = height[i];
  }

  return max;
};
*/

var maxArea = function (height) {
  let max = 0;
  let t1 = 0;
  let t2 = height.length - 1;

  while (t1 !== t2) {
    let temp = Math.min(height[t1], height[t2]) * (t2 - t1);

    if (temp > max) max = temp;

    if (height[t1] < height[t2]) {
      t1++;
    } else {
      t2--;
    }
  }
  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
