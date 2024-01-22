/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let tNums = new Array(nums.length);
    let repeated;
    let i = 0;
    while (i < nums.length) {
        if (tNums[nums[i]-1]) {
            repeated = nums[i];
        } else {
            tNums[nums[i]-1] = nums[i];
        }
        i++
    }
    i = 0;
    while (tNums[i]) {
        i++;
    }
    return [repeated, i + 1]
};