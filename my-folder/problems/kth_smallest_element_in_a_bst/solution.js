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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let recurse = (node) => {
        if (!node) {
            return [];
        }
        let arr = recurse(node.left);
        arr.push(node.val);
        arr = arr.concat(recurse(node.right))
        return arr;
    }
    return recurse(root)[k - 1];
};