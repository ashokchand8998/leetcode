class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
        while len(stones) > 1:
            m = max(stones)
            stones.remove(m)
            n = max(stones)
            stones.remove(n)
            if m != n:
                stones.append(abs(m-n))
        return stones[0] if stones else 0