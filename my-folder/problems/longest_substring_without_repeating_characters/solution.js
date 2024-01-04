/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    l = 0;
    r = 0;
    counters = new Set();
    max = 0;

    while (r < s.length) {
        if (counters.has(s[r])) {
            max = Math.max(max, counters.size);
            counters.delete(s[l]);
            l++
        } else {
            counters.add(s[r], r);
            r++
        }
    }

    return Math.max(max, counters.size);
};