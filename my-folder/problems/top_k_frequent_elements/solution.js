/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numCounts = new Map();
    for (let val of nums) {
        let temp = numCounts.get(val) || 0;
        numCounts.set(val, temp+1)
    }
    return [...numCounts.entries()].sort((a,b) => b[1]-a[1]).splice(0,k).map((val) => val[0]);
};