/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (root1 === null) return root2;
    if (root2 === null) return root1;
    
    // Create a new node with the sum of values from root1 and root2
    let merged = new TreeNode(root1.val + root2.val);
    
    // Recursively merge the left and right subtrees
    merged.left = mergeTrees(root1.left, root2.left);
    merged.right = mergeTrees(root1.right, root2.right);
    
    return merged;
        
    
};