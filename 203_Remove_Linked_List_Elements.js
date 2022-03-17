/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let cur = head;
  let prev = null;

  while (cur !== null) {
    if (cur.val === val) {
      cur = cur.next;

      if (prev === null) head = cur;
      else prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  return head;
};
