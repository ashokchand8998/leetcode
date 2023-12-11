/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        if (target > nums[r] && target < nums[l]) {
            return -1;
        }
        mid = Math.floor((l + r) / 2);
        val = nums[mid];
        if (val == target) {
            return mid;
        }
        leftSorted = val >= nums[l];
        if (leftSorted) {
            if (target > val || target < nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            if (target < val || target > nums[r]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return -1;
};