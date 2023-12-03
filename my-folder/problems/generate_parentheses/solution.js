/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let tempStack = [];
    let result = [];

    function backTrack(openP, closeP) {
        if (openP == n && closeP == n) {
            result.push(tempStack.join(''))
            return
        }

        if (openP < n) {
            tempStack.push('(');
            backTrack(openP + 1, closeP);
            tempStack.pop()
        }

        if (closeP < openP) {
            tempStack.push(')');
            backTrack(openP, closeP + 1);
            tempStack.pop()
        }
    }
    backTrack(0, 0);
    return result
};