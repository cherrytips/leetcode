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
var swapPairs = function (head) {
  let cur = head;
  let prev = null;

  while (cur && cur.next) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = cur;

    if (prev) {
      prev.next = temp;
    } else {
      head = temp;
    }

    prev = cur;
    cur = cur.next;
  }

  return head;
};
