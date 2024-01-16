/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let curr = head;
    let oldNewHash = new Map();
    oldNewHash.set(null,null );
    while (curr) {
        temp = new Node(curr.val);
        oldNewHash.set(curr, temp);
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        temp = oldNewHash.get(curr);
        temp.next = oldNewHash.get(curr.next);
        temp.random = oldNewHash.get(curr.random);
        curr = curr.next;
    }
    return oldNewHash.get(head);
};