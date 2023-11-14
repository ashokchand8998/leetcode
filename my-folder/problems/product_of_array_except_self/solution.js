/**
 * @param {number[]} nums
 * @return {number[]}
 */

 /*
 use prefix and postfix products stored and then combined to get final result
 */
var productExceptSelf = function (nums) {
    let result = [];
    let prefix = 1;
    let postfix = 1;
    let n = nums.length
    for(let i=0; i<n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for(let j=n-1; j>=0; j--) {
        result[j] *= postfix;
        postfix *= nums[j];
    }
    return result
};