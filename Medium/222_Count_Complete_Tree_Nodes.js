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
 * @return {number}
 */
var countNodes = function (root) {
  let answer = 0;

  if (root === null) return answer;

  if (root.left === null && root.right === null) return 1;
  else answer++;

  if (root.left !== null) answer += countNodes(root.left);
  if (root.right !== null) answer += countNodes(root.right);

  return answer;
};
