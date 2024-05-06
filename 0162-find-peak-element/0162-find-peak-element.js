/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l=nums.length-1;
    let s=0, mid;
    while(l>s){
        mid=Math.floor((l+s)/2);
        if(nums[mid+1]<nums[mid])
        l=mid;
        else
        s=mid+1;
    }
    return l;
    
};