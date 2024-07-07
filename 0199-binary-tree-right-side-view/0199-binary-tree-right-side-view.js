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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }
    
    const rightView = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelLength = queue.length;
        
        for (let i = 0; i < levelLength; i++) {
            const node = queue.shift();
            
           if (i === levelLength - 1) {
                rightView.push(node.val);
            }
            
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    
    return rightView;
    
};