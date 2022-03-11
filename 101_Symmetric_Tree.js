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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return helper(root.left, root.right);
};

var helper = function (left, right) {
  let bool;

  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val === right.val) bool = true;
  else return false;

  return (bool = helper(left.left, right.right) && helper(left.right, right.left));
};
