class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        reverse = 0
        num = abs(x)
        while num > 0:
            remainder = num % 10
            reverse = (reverse * 10) + remainder
            num /= 10
        if reverse <= 2147483647 and reverse >= -2147483648:
            return reverse if x > 0 else -reverse
        else:
            return 0