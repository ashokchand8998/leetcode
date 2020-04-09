class Solution(object):
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        S = list(S)
        T = list(T)
        c = [(S,S.count('#')), (T,T.count('#'))]
        for i in range(2):
            k = c[i][0]
            for j in range(c[i][1]):
                if k.index('#') != 0:
                    k.pop(k.index('#')-1)
                k.pop(k.index('#'))
            
        return S == T