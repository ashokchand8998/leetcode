/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let forwardP = head;
    let temp = head;
    let removeP = head;
    let i = 0;
    while (temp.next && i < n - 1) {
        forwardP = temp.next;
        temp = temp.next;
        i++
    }
    while (forwardP.next) {
        if (!forwardP.next?.next) {
            temp = removeP.next?.next;
            removeP.next = temp;
            return head;
        }
        forwardP = forwardP.next;
        removeP = removeP.next;
    }

    // if n == size thus forward pointer is pointed to last node
    return head.next
};