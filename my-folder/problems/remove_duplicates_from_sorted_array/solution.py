class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in nums:
            while nums.count(i) > 1:
                nums.remove(i)
        return len(nums)