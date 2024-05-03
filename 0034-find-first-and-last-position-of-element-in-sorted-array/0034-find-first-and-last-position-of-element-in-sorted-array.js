/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l=nums.length-1;
    let s=0;
    let i1=-1, i2=-1;
    while(s<=l){
        if(nums[l]!==target && i2===-1)l--;
        else  i2=l;
        if(nums[s]!==target && i1===-1)s++;
        else i1=s;
        if(i1!=-1 && i2!=-1)break;
    }    
    return [i1,i2]
};