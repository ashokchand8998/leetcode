# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if root:
            tree = [root]
            output = [[root.val]]
            while tree:
                temp = list()
                count = len(tree)
                for i in range(count):
                    node = tree.pop(0)

                    if node.left:
                        tree.append(node.left)
                        temp.append(node.left.val)
                    if node.right:
                        tree.append(node.right)
                        temp.append(node.right.val)
                if temp:
                    output.insert(0, temp)
            return output
        else:
            return root