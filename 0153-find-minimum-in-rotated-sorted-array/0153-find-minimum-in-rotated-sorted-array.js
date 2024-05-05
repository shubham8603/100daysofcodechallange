/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let l=nums.length-1;
    let s=0;
    while(l>s){
        let mid=Math.floor((l+s)/2);
        if(mid>0 && nums[mid]<nums[mid-1])return nums[mid];
         if(nums[l]>nums[mid])l=mid;
        else s=mid+1;
    }
    return nums[s];
};