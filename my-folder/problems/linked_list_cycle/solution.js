/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let temp = new Map();

    let tHead = head;
    while(tHead) {
        if (temp.get(tHead)) {
            return true;
        }
        temp.set(tHead, true);
        tHead = tHead.next;
    }
    return false;
};