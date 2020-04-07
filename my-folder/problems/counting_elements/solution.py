class Solution(object):
    def countElements(self, arr):
        count = 0
        for i in arr:
            if i+1 in arr:
                count += 1
        return count