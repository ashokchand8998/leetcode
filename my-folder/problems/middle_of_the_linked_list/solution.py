# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from math import ceil
class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        a = []
        while 1:
            a.append(head)
            if head.next:
                head = head.next
            else:
                break
        
        n = len(a)
        mid = int(ceil(n/2))
        
        return a[mid]