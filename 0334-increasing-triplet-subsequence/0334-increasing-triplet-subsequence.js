/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length<3)return false;
    let middle=Infinity;
    let smallest=Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>middle)return true;
            else if(nums[i]>smallest && nums[i]<middle) middle=nums[i];
            else if(nums[i]<smallest) smallest=nums[i];
        }
    return false;
    
};