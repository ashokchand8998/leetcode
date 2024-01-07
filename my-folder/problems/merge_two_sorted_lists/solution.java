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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode newHead = null;
        ListNode nextNode = null;
        while (list1 != null || list2 != null) {
            ListNode node2;
            ListNode node;
            if (list1 != null && list2 != null) {
                node2 = new ListNode(list2.val);
                node = new ListNode(list1.val, node2);
                if (nextNode != null) {
                    nextNode.next = node;
                }
                if (list1.val == list2.val) {
                    nextNode = node2;
                    list1 = list1.next;
                    list2 = list2.next;
                } else if (list1.val > list2.val) {
                    node = node2;
                    if (nextNode != null) {
                        nextNode.next = node;
                        nextNode = nextNode.next;
                    } else {
                        nextNode = node;
                    }
                    list2 = list2.next;
                } else {
                    if (nextNode != null) {
                        nextNode.next = node;
                        nextNode = nextNode.next;
                    } else {
                        nextNode = node;
                    }
                    list1 = list1.next;
                }
            } else if (list1 != null) {
                node = new ListNode(list1.val);
                if (nextNode != null) {
                    nextNode.next = node;
                    nextNode = nextNode.next;
                } else {
                    nextNode = node;
                }
                list1 = list1.next;
            } else {
                node = new ListNode(list2.val);
                if (nextNode != null) {
                    nextNode.next = node;
                    nextNode = nextNode.next;
                } else {
                    nextNode = node;
                }
                list2 = list2.next;
            }
            if (newHead == null) {
                newHead = node;
            }
        }
        return newHead;
    }
}