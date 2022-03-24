/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let val_list = [];
  let cur = head;
  let index = 0;

  while (cur !== null) {
    val_list.push(cur.val);
    cur = cur.next;
  }

  cur = head;
  while (1) {
    cur.val = val_list[index];

    cur = cur.next;
    if (cur === null) break;

    cur.val = val_list[val_list.length - 1 - index];

    cur = cur.next;
    if (cur === null) break;

    index++;
  }
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let cur = head;
while (cur !== null) {
  process.stdout.write(cur.val.toString() + ' ');
  cur = cur.next;
}

console.log('');
reorderList(head);

cur = head;
while (cur !== null) {
  process.stdout.write(cur.val.toString() + ' ');
  cur = cur.next;
}
