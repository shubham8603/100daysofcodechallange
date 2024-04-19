/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    f=0,s=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>=f){
            s=f;
            f=nums[i];
            
        }
        else if(nums[i]>s && nums[i]!==f){
            s=nums[i];
        }
        
    }
    return (s-1)*(f-1);
    
};