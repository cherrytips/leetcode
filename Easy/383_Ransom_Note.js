/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  while (ransomNote.length > 0) {
    let before = magazine;

    magazine = magazine.replace(ransomNote[0], '');
    if (before === magazine) return false;

    ransomNote = ransomNote.substring(1);
  }

  return true;
};

let ransomNote = 'aaaa';
let magazine = 'bbaaa';

console.log(canConstruct(ransomNote, magazine));
