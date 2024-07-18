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
var deepestLeavesSum = function(root) {
    let res = 0;
    let q = [root];
    while (q.length) {
        let size = q.length;
        res = 0;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            res += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return res;
    
};