/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) { 
    let n = height.length;
    let l = new Array(n);
    let r = new Array(n);
    l[0] = height[0];
    r[n - 1] = height[n - 1];
    for (let i = 1; i < n; i++) {
        l[i] = Math.max(height[i], l[i - 1]);
    }
    for (let i = n - 2; i >= 0; i--) {
        r[i] = Math.max(height[i], r[i + 1]);
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.min(l[i], r[i]) - height[i];
    }
    return sum;
    
};