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
 * @return {number[][]}
 */
var levelOrder = function(root) {
        let queue = [root];
        let result = [];

        while (queue.length) {
            let qLen = queue.length;
            let levelArr = [];
            for (let i=0; i < qLen; i++) {
                let node = queue.pop();
                if (node) {
                    levelArr.push(node.val);
                    queue.unshift(node.left);
                    queue.unshift(node.right)
                }
            }
            if (levelArr.length) {
                result.push(levelArr);
            }
        }

        return result;
};