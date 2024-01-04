/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    l = 0;
    max = 0;
    store = {};

    for (let r = 0; r < s.length; r++) {
        store[s[r]] = 1 + (store[s[r]] || 0)
        let storeMax = Math.max(...Object.values(store))
        if ((r + 1 - l - storeMax) > k) {
            store[s[l]] -= 1;
            l++;
        }
        max = Math.max(r + 1 - l, max)
    }
    return max;
};