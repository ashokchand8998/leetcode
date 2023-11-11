/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 /**
    as this is 2 sum:
    - only 2 numbers needs to be focused and looked for
    - there will always be a pair of solution
    - 1 of the O(n) way would be to store the difference(ie. the number remaining after subtracting current val from target) is what we expect our second number to be. Thus storing each number in an object as key with index as value will help check whether we have passed to the remaining differnce(existing as a num) before and then get the index
  */

var twoSum = function (nums, target) {
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < (nums.length); j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j]
    //         }
    //     }
    // }

    let tempObj = {};
    for(let i=0; i < nums.length; i++) {
        let diff = target-nums[i];
        if (tempObj.hasOwnProperty(diff)) {
            return [tempObj[diff], i]
        } else {
            tempObj[nums[i]] = i
        }
    }
};