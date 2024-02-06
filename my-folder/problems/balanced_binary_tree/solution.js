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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let result = true;
    function cb(root) {
        if (!root) {
            return 0;
        }

        let left = cb(root.left);
        let right = cb(root.right);
        result = result && Math.abs(left-right) <= 1;
        return Math.max(left, right) +1
    }
    cb(root);
    return result;
};