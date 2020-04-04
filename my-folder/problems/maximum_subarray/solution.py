class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_sum = nums[0]
        curr_sum = 0
        for i in nums:
            if curr_sum <= 0:
                curr_sum = 0
                
            curr_sum += i
            
            if curr_sum >= max_sum:
                max_sum = curr_sum
        return max_sum