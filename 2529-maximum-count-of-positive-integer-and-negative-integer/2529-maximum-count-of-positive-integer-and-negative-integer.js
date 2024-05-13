/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let m=0,p=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]<0)m++;
        else if(nums[i]>0)
        p++;
    }
    return Math.max(m,p);
};