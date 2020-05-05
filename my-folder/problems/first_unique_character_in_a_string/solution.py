class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        for i in s:
            if s.count(i) == 1:
                return s.index(i)
        else:
            return -1