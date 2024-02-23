/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        let lP = i;
        let rP = i + 1;
        while (rP < nums.length) {
            let total = nums[lP] + nums[rP];
            if (total === target) {
                return [lP, rP];
            }
            rP++;
        }
    }
};