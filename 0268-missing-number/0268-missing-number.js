/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let sum=Math.floor(n*(n+1)/2)
     let arraysum=0;
    for(let i=0;i<n;i++){
        arraysum+=nums[i];
    }

     sum-=arraysum;
     return sum;
};