/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let result = [];
    let q = root ? [root] : [];

    while (q.length) {
        qLen = q.length;
        let arr = [];
        for (let i = 0; i < qLen; i++) {
            let node = q.pop();
            if (node) {
                arr.push(node.val);
                q.unshift(node.left);
                q.unshift(node.right);
            }
        }
        if (arr.length) result.push(arr.pop());
    }
    return result;
};