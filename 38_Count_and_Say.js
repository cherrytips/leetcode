/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1';

  if (n === 1) return result;

  while (n > 1) {
    let cnt = {};
    let temp = '';

    for (let i = 0; i < result.length; i++) {
      if (i === 0) {
        cnt[result[i]] = 1;
      } else if (cnt[result[i]] === undefined) {
        cnt[result[i]] = 1;

        temp += cnt[result[i - 1]].toString();
        temp += result[i - 1].toString();

        cnt[result[i - 1]] = undefined;
      } else {
        cnt[result[i]]++;
      }

      if (i === result.length - 1) {
        temp += cnt[result[i]].toString();
        temp += result[i].toString();
      }
    }

    result = temp;

    n--;
  }

  return result;
};

let n = 4;
console.log(countAndSay(n));
