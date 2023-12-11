/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let min = nums[0];

    while (l <= r) {
        if (nums[l] < nums[r]) {
            min = Math.min(nums[l], min);
            break;
        }
        mid = Math.floor((r + l) / 2);
        val = nums[mid];
        min = Math.min(val, min)
        if (nums[l] <= val) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return min;
};