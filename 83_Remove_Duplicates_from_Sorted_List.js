/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
var deleteDuplicates = function (head) {
  let node = head;

  while (node) {
    let next = node.next;
    if (!next) break;

    while (node.val === next.val) {
      node.next = next.next;
      if (!node.next) break;
      next = node.next;
    }

    node = next;
  }

  return head;
};
*/
// --------------- 복잡해보여서 다른 방법으로변경

var deleteDuplicates = function (head) {
  let prev = null;
  let cur = head;

  while (cur) {
    if (prev && prev.val === cur.val) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  return head;
};
