class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        else:
            l = list(str(x))
            l.reverse()
            s = "".join(l)
            return True if x == int(s) else False
            