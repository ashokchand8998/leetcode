/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let temp = new Set(nums);
    let longest = 0;
    for (let val of temp) {
        if (!temp.has(val-1)) {
            let count = 0
            while(temp.has(val+count)) {
                count++;
            }
            if (count > longest) {
                longest = count
            }
        }
    }
    return longest;
};