/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // [-1, -1, 0, 1, 2, 4];
    // keeping 1st index just a normal iterator and other 2 as two sum with few additional handling to store multiple combination
    nums = nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            if (threeSum > 0) {
                right--;
            } else if (threeSum < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                // incrementing any of the pointer
                left++;
                while (nums[left] == nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    return result
};