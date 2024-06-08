/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1;
    let left = 0, right = n - 1, top = 0, bottom = n - 1;

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = value++;
        }
        top++;
        
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }
        right--;
        
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = value++;
        }
        bottom--;
        
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = value++;
        }
        left++;
    }
    
    return matrix;
};