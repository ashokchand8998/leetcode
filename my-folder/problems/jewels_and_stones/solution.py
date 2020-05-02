class Solution(object):
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        J = list(J)
        S = list(S)
        count = 0
        for i in J:
            if i in S:
                count += S.count(i)
        return count