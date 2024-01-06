/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    store1 = new Array(26).fill(0);
    store2 = new Array(26).fill(0);

    // storing values for both arrays uptil s1's length
    // just to store initial values. //storing same number of values of s2 will help covering scenario where both words are of same length and the its also anagram/permuation of s1
    for (let i = 0; i < s1.length; i++) {
        store1[s1[i].charCodeAt(0) - 97] += 1;
        store2[s2[i].charCodeAt(0) - 97] += 1;
    }

    matches = 0;
    // storing intial matches values with 1 round of comparison
    for (let i = 0; i < 26; i++) {
        matches += (store1[i] == store2[i] ? 1 : 0);
    }

    l = 0;
    // sliding window to starting after the index at s1's length as rest values are already stored in checked for matches
    for (r = s1.length; r < s2.length; r++) {
        if (matches == 26) {
            return true;
        }

        let charIdx = (s2[r].charCodeAt(0) - 97);
        store2[charIdx] += 1;
        if (store1[charIdx] == store2[charIdx]) {
            matches++;
        }
        // only checking if gap was 1? //not sure
        else if ((store1[charIdx] + 1) == store2[charIdx]) {
            matches--;
        }
        let lCharIdx = (s2[l].charCodeAt(0) - 97);
        store2[lCharIdx] -= 1;
        if (store1[lCharIdx] == store2[lCharIdx]) {
            matches++;
        }
        // only reducing if the gap was 1? //not sure
        else if (store1[lCharIdx] - 1 == store2[lCharIdx]) {
            matches--;
        }
        l++;
    }
    return matches == 26;
};