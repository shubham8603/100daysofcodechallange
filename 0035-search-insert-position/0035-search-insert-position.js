/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let s=0;
    let l=nums.length-1;
    while(s<=l){
        let mid=Math.floor((l+s)/2);
        if(nums[mid]==target)return mid;
        if(nums[mid]>target)l=mid-1;
        else
        s=mid+1;
    }
    return s;
    
};