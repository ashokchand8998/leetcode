/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let newMap = new Map();
    for(let val of nums) {
        newMap.set(val, (newMap.get(val) || 0)+1)
    }
    let sortedMap = [...newMap.entries()].sort((a, b) => {
        return b[1] - a[1]
    })
    return sortedMap.map((val) => val[0]).slice(0, k)
};