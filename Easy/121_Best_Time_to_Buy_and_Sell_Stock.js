/**
 * @param {number[]} prices
 * @return {number}
 */
let max = 0;

var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) max = prices[j] - prices[i];
    }
  }

  return max;
};

/*
var maxProfit = function (prices, start = 0, time = 1) {
  if (prices.length <= time) return max;

  if (prices[time] - prices[start] > max) max = prices[time] - prices[start];
  maxProfit(prices, start, time + 1);

  return maxProfit(prices, start + 1, time + 1);
};
*/

console.log(maxProfit([7, 6, 4, 3, 1]));
