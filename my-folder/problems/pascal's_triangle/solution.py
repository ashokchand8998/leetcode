class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        #declaring our final array
        ans = []
        i = 0
        while i < numRows:
            temp = []
            for j in range(i+1):
                if j == 0 or j == i:
                    temp.append(1)
                else:
                    left, right = ans[i-1][j-1], ans[i-1][j]
                    temp.append(left + right)
            ans.append(temp)
            i += 1
        return ans