/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (hashMap.has(val)) {
            return [hashMap.get(val), i]
        }
        hashMap.set(target-val, i)
    }
    return false
};