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
var preorderTraversal = function (root) {
  if (!root) return [];

  let result = [];
  let stack = [root];

  while (stack.length) {
    let cur = stack.pop();
    result.push(cur.val);

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }

  return result;
};
