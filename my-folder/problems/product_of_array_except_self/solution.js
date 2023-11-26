/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
use prefix and postfix products stored and then combined to get final result
*/
var productExceptSelf = function (nums) {
    let result = []
    let preProd = 1;
    let postProd = 1;
    for (let val of nums) {
        result.push(preProd);
        preProd *= val;
    }
    for (let i = result.length - 2; i >= 0; i--) {
        postProd *= nums[i+1];
        result[i] *= postProd
    }
    return result;
};