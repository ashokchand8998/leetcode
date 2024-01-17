/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let tVal = 0;
    let extra = 0;

    tVal = ((l1.val || 0) + (l2.val || 0)) + extra;
    if (tVal > 9) {
        extra = Math.floor(tVal / 10);
        tVal = tVal % 10
    }
    let sum = new ListNode(tVal, null);
    let temp = sum;

    while (l1?.next || l2?.next) {
        lVal = l1?.next?.val || 0;
        rVal = l2?.next?.val || 0;

        tVal = (lVal + rVal) + extra;

        extra = 0;
        if (tVal > 9) {
            extra = Math.floor(tVal / 10);
            tVal = tVal % 10
        }
        temp.next = new ListNode(tVal, null);

        temp = temp.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    if (extra) {
        temp.next = new ListNode(extra, null)
    }

    return sum;

};