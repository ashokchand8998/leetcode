class Solution(object):
    def maxProfit(self, prices):
        profit = 0
        for i in range(len(prices)-1):
            profit += max(prices[i+1] - prices[i], 0)
        return profit