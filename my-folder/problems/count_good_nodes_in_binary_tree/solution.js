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
var goodNodes = function(root, max=-Infinity) {
    if (!root) {
        return 0;
    }
    let foundGoodNode = 0;
    max = Math.max(max, root.val);
    if(root.val == max) {
        foundGoodNode = 1;
    }

    return goodNodes(root.left, max) + goodNodes(root.right, max) + foundGoodNode;
};