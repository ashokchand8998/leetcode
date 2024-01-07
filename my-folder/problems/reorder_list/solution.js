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
var reorderList = function(head) {
    // reverse second half
    let fP = head.next;
    let sP = head;
    while(fP && fP.next) {
        sP = sP.next;
        fP = fP.next.next
    }
    let second = sP.next;
    let prev = sP.next = null;
    // console.log("second", second.val)

    // reversing 2nd list
    while(second) {
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }

    // console.log("prev: ", prev.val)

    // merging
    while(prev) {
        let tmp1 = head.next
        let tmp2 = prev.next
        head.next = prev;
        prev.next = tmp1

        head = tmp1;
        prev = tmp2
    }
};