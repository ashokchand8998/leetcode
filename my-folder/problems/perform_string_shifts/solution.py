class Solution(object):
    def stringShift(self, s, shift):
        """
        :type s: str
        :type shift: List[List[int]]
        :rtype: str
        """
        s = list(s)
        for i in shift:
            for j in range(i[1]):
                if i[0] == 0:
                    s.append(s.pop(0))
                else:
                    s.insert(0, s.pop())
        return ''.join(s)
    