class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        temp_list = s.split()
        return len(temp_list[-1]) if len(temp_list) > 0 else 0