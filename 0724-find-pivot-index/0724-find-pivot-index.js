/**
* @param {number[]} nums
* @return {number}
*/
var pivotIndex = function(nums) {
let sum=0;
let n=nums.length-1;
let right = 0, left=0;
for(let i=0;i<=n;i++){
    sum+=nums[i];
}
for(let i=0;i<=n;i++){
    right=sum-left-nums[i];

    if(left===right)return i;
    left+=nums[i];
}
return -1;
};