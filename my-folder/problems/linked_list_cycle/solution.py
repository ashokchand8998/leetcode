# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        arr = list()
        temp = head
        while temp:
            arr.append(temp)
            if temp.next not in arr:
                temp = temp.next
            else:
                #print(arr)
                return True
        #print(arr)
        return False