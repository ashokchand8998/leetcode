class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums_copy = set(nums)
        for i in nums_copy:
            if nums.count(i) > len(nums)/2:
                return i