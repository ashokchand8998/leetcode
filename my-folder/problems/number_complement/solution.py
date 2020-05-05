class Solution(object):
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """
        x = list(format(num, 'b'))
        for i in range(len(x)):
            if x[i] == '1':
                x[i] = '0'
            else:
                x[i] = '1'

        return int("".join(x),2)