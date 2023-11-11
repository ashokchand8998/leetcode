/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];
    for(let i=0; i<nums.length; i++) {
        result.push(nums.reduce((acc, b, index) => {
            return ((index != i) ? acc*b : acc)
        },1));
    }
    // let result = nums.map((num) => num ? (total / num) : total)
    // console.log("result", result)
    return result
};