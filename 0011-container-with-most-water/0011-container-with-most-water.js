/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let wc=0, left=0, right=height.length-1;
    while(left<right){
        wc=Math.max(wc,Math.min(height[left],height[right])*(right-left));
        if(height[left]>height[right])right--;
        else left++;
    }
    return wc;
};