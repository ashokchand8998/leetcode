# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1:
            return l2
        elif not l2:
            return l1
        else:
            nodes  = (l1, l2) if l1.val <= l2.val else (l2, l1)
            temp1, temp2 = nodes[0], nodes[1]
            
            while temp1 and temp2:
                if temp1.next and temp1.next.val <= temp2.val:
                    temp1 = temp1.next
                else:
                    temp = temp2.next
                    temp2.next = temp1.next
                    temp1.next = temp2
                    temp1, temp2 = temp1.next, temp
            return nodes[0]