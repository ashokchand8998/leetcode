class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        ans = []
        if len(strs) > 0:
            smallest = min(strs, key = len)
            strs.remove(smallest)
        
            for i in range(len(smallest)):
                for j in strs:
                    if smallest[i] == j[i]:
                        continue
                    else:
                        return "".join(ans)
                ans.append(smallest[i])
        return "".join(ans)