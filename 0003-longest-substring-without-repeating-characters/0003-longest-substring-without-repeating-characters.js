/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = 0;
    let left = 0;
    let right = left + 1;
    let hashMap = new Map();
    if (s.length<2) {
        return s.length;
    }
    hashMap.set(s[left], 0)
    while (right < s.length) {
        let val = s[right]
        if (hashMap.has(val)) {
            left = Math.max(left,hashMap.get(val) + 1);
        }
        hashMap.set(val, right);
        count = Math.max(count, right - left + 1)
        right++
    }
    return count;
};