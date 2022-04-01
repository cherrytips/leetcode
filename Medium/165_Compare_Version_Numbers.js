/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let index = 0;

  version1 = version1.split('.');
  version2 = version2.split('.');

  for (let i = 0; i < version1.length; i++) {
    if (version1[i][0] === '0') {
      version1[i] = version1[i].slice(1);
      i--;
    }
  }

  for (let i = 0; i < version2.length; i++) {
    if (version2[i][0] === '0') {
      version2[i] = version2[i].slice(1);
      i--;
    }
  }

  while (version1[index] !== undefined || version2[index] !== undefined) {
    if (version1[index] === undefined) {
      if (version2[index].length === 0) {
        index++;
        continue;
      } else return -1;
    } else if (version2[index] === undefined) {
      if (version1[index].length === 0) {
        index++;
        continue;
      } else return 1;
    }

    if (parseInt(version1[index] || 0) < parseInt(version2[index])) return -1;
    else if (parseInt(version1[index]) > parseInt(version2[index] || 0)) return 1;

    index++;
  }

  return 0;
};

let version1 = '0.1';
let version2 = '1.1';
console.log(compareVersion(version1, version2));
