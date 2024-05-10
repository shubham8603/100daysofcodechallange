/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum=0;
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
       max= Math.max(max,sum);
        sum=sum<0?0:sum;
    }
    return max;
    
};