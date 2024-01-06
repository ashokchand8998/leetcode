/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head != null) {
            ListNode curr = new ListNode(head.val, head.next);
            curr.next = null;

            while (head.next != null) {
                // if head is 1 then head.next is 2 and is being passed on to become curr of
                // reverse linked list
                ListNode temp = new ListNode(head.next.val, head.next.next);
                temp.next = new ListNode(curr.val, curr.next);
                curr = temp;
                head = head.next;
            }
            return curr;
}
        return head;
    }
}