/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max=Math.max(...nums);
    let res=-1;
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]===max) { res=i;
        continue;}
        if(nums[i]*2>max){res=-1; 
        break;}
    }
    return res;

};