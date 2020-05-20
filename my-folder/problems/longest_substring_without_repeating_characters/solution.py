class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        size = len(s)
        max_len = 0
        l = []
        start = 0
        end = start
        while start < size and end < size:
            if s[end] in l:
                l = l[l.index(s[end]) + 1 : ]
            else:
                l.append(s[end])
                max_len = max(max_len, len(l))
                end += 1

        return max_len