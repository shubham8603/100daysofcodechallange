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
var isUnivalTree = function(root) {
    if (!root) return true; 
    const isUnival = (node, value) => {
        if (!node) return true; 
        if (node.val !== value) return false; 
        return isUnival(node.left, value) && isUnival(node.right, value);
    };
    
    return isUnival(root, root.val); 
    
};