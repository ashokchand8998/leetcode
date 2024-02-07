/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

sameTree = function (root, subRoot) {
    if (!root && !subRoot) {
        return true;
    } else if (!root || !subRoot || (root.val !== subRoot.val)) {
        return false;
    }

    return sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
}

var isSubtree = function (p, q) {
    if (!q) {
        return true;
    }
    if (!p) {
        return false;
    }

    if (sameTree(p, q)) {
        return true;
    } else {
        return (isSubtree(p.left, q) || isSubtree(p.right, q))
    }
};