/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

let n = 3;
console.log(climbStairs(n));

/*
0: 0
1: 1
2: 1+1, 2 = 2
3: 1+1+1, 1+2, 2+1 = 3
4: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 = 5
5: 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1 = 8
6: 1, 5, 6, 1 = 13
...
if (n > 3)
a(n) = a(n-1) + a(n-2)
*/
