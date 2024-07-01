/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        hashMap.set(val, i);
    }
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (hashMap.has(target - val) && hashMap.get(target-val) !== i) {
            return [i, hashMap.get(target - val)];
        }
    }
};