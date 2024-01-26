/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let mergedArr = [];
    let head1 = lists[0] || null;
    // console.log("H1", head1)
    for (let i = 1; i < lists.length; i++) {
        let head2 = lists[i] || null;
        while (head1 || head2) {
            if (head1 && head2) {
                if (head1.val > head2.val) {
                    mergedArr.push(head2.val);
                    if (head2) head2 = head2.next;
                } else if (head2.val > head1.val) {
                    mergedArr.push(head1.val);
                    if (head1) head1 = head1.next;
                } else {
                    mergedArr.push(head1.val);
                    mergedArr.push(head2.val);
                    if (head1) head1 = head1.next;
                    if (head2) head2 = head2.next;
                }
            } else {
                if (head1) {
                    mergedArr.push(head1.val);
                    head1 = head1.next;
                }
                if (head2) {
                    mergedArr.push(head2.val);
                    head2 = head2.next;
                }
            }
        }

        let temp = mergedArr.length ? new ListNode(mergedArr[0], null) : null;
        head1 = temp;
        for (let j = 1; j < mergedArr.length; j++) {
            let ntemp = new ListNode(mergedArr[j], null);
            temp.next = ntemp;
            temp = temp.next;
        }
        // console.log("inside mergedArr", mergedArr, head1,temp)
        mergedArr = [];
    }
    // console.log("mergedArr", mergedArr)
    return head1
};