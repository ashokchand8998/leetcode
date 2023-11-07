/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let setArr = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (setArr.has(nums[i])) {
            return true;
        }
        setArr.add(nums[i])
    }
    return false;
};