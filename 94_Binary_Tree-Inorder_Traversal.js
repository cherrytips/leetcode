/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* 배열 저장 별도 함수 사용
var inorderTraversal = function (root) {
  let result = [];
  save(root, result);
  return result;
};

var save = function (root, result) {
  if (root) {
    save(root.left, result);
    result.push(root.val);
    save(root.right, result);
  }
};
*/

// 숏코딩
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right));
};

let root = [1, 2, 3, 4, 5, 6, 7];
