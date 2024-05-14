/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums=nums.map(String);
    nums.sort((a,b)=>{return (b+a)-(a+b)});
    let results= nums.join('');
    if(results[0]==='0')
    return '0';
    
    return results;

    
};