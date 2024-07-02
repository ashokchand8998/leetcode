/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let hashSet = new Set();
    let maxVal = Number.NEGATIVE_INFINITY;
    let minVal = 10 ** 9
    for (let val of nums) {
        hashSet.add(val);
        minVal = Math.min(minVal, val)
        maxVal = Math.max(maxVal, val)
    }

    let result = 0;
    let count = 0;
    for (let val of nums) {
        if (!hashSet.has(val - 1)) {
            count = 1;
            let x = val;
            while (hashSet.has(x + 1)) {
                x++;
                count++
            }
            result = Math.max(result, count);
        }
    }
    return result;
};