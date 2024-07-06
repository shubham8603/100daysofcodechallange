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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }

    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    let newTargetSum = targetSum - root.val;
    
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
    
};