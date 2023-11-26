/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let start = 0;
    s = s.replace(/[^0-9A-Z]/gi, '').toLowerCase();
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};