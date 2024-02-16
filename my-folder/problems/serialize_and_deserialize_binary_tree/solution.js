/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return 'null';
    }
    return String(root.val) + ',' + serialize(root.left) + ',' + serialize(root.right)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let val = data.split(',');
    let i = 0
    let recurse = (arr) => {
        parsed = JSON.parse(arr[i])
        if (parsed == null) {
            return null;
        }

        let root = new TreeNode(parsed);

        i++;
        let parsedLeft = JSON.parse(arr[i]);
        if (parsedLeft !== null) {
            root.left = recurse(arr);
        } else {
            root.left = parsedLeft;
        }

        i++;
        let parsedRight = JSON.parse(arr[i])
        if (parsedRight !== null) {
            root.right = recurse(arr);
        } else {
            root.right = parsedRight;
        }
        return root;
    }
    return recurse(val)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */