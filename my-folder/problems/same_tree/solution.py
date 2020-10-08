# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        def tree_list(node):
            if node is None:
                return
            values = list()
            queue = [node]
            while queue:
                temp_node = queue.pop(0)
                if temp_node:
                    values.append(temp_node.val)
                    queue.append(temp_node.left)
                    queue.append(temp_node.right)
                else:
                    values.append(temp_node)
            return values
        return tree_list(p) == tree_list(q)