/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let trSet = new Set(nums);
    let sum1 = nums[0] + nums[1];
        let sum2 = nums[1] + nums[2];
        let sum3 = nums[0] + nums[2];
        if (sum1 > nums[2] && sum2 > nums[0] && sum3 > nums[1]) {
            if (trSet.size == 1) {
                return "equilateral";
            } else if(trSet.size == 2) {
                return "isosceles"
            } else {
                return "scalene"
            }
        } else {
            return "none";
        }
};