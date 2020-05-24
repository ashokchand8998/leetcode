class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        start = ['(', '{', '[']
        end = [')', '}', ']']
        history = []
        for i in s:
            if i in start:
                history.append(i)
            if i in end:
                loc = end.index(i)
                if len(history) > 0 and history[-1] == start[loc]:
                    history.pop(-1)
                else:
                    return False
        return False if len(history) > 0 else True