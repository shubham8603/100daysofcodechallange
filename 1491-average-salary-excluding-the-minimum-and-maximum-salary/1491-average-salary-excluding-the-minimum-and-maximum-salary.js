/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max=salary[0],min=salary[0], sum=0;
    for(let i=0;i<salary.length;i++){
        max=Math.max(max,salary[i]);
        min=Math.min(min,salary[i]);
        sum+=salary[i];

    }
    sum-=(max+min);
    return sum/(salary.length-2);
    
};