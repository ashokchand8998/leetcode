/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let len = nums.length;
    if (len < 4) {
        return 1
    }
    let sum = nums[0] + nums[1];
    let count = 1;
    for(let i=3; i<nums.length; i+=2) {
        let tSum = nums[i-1] + nums[i];
        if (tSum !== sum) {
            return count;
        }
        count++;
    }
    return count;
};