class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        import math
        if int(math.sqrt(num)) == math.sqrt(num):
            return True
        else:
            False