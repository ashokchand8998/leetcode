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
 * @return {number}
 */
var maxPathSum = function (root) {
    let result = root.val;

    let recurse = (node) => {
        if (!node) {
            return 0;
        }

        let left = Math.max(0, recurse(node.left));
        let right = Math.max(0, recurse(node.right));

        let splitTotal = left + right + node.val;
        result = Math.max(result, splitTotal);
        let max = Math.max(left, right);
        return max+node.val;
    }
    recurse(root);
    return result;
};