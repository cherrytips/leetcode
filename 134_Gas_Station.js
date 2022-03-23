/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let possible_start = [];

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] < cost[i]) continue;
    else possible_start.push(i);
  }

  for (let i = 0; i < possible_start.length; i++) {
    let start = possible_start[i];
    let next = start + 1;
    let tank = gas[start];

    if (next === gas.length) next = 0;

    do {
      if (next === 0) tank -= cost[cost.length - 1];
      else tank -= cost[next - 1];

      if (tank < 0) break;

      tank += gas[next];
      next++;

      if (next === gas.length) next = 0;
    } while (next - 1 !== start);

    if (next - 1 === start) return start;
  }

  return -1;
};

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
let gas_1 = [2, 3, 4];
let cost_1 = [3, 4, 3];
let gas_2 = [3, 3, 4];
let cost_2 = [3, 4, 4];
let gas_3 = [5, 1, 2, 3, 4];
let cost_3 = [4, 4, 1, 5, 1];

console.log(canCompleteCircuit(gas, cost));
console.log(canCompleteCircuit(gas_1, cost_1));
console.log(canCompleteCircuit(gas_2, cost_2));
console.log(canCompleteCircuit(gas_3, cost_3));
