class Solution(object):
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        charList = list(string.ascii_uppercase)
        position = 0
        for indx, char in enumerate(s):
            position = (position * 26) + (charList.index(char) + 1) 
        return position