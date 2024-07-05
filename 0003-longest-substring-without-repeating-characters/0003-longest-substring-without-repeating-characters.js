/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = 0;
    let left = 0;
    for (; left < s.length; left++) {
        let tempCount = 1;
        let hashSet = new Set();
        hashSet.add(s[left])
        let right = left + 1;
        while (right< s.length && !hashSet.has(s[right])) {
            tempCount++;
            hashSet.add(s[right]);
            // console.log("s[right]", s[right])
            right++
        }
        // console.log("tc", tempCount)
        count = Math.max(count, tempCount)
    }
    return count;
};