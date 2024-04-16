/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
   let maxNum=numBottles;
   let rem=0;
    while (numBottles>=numExchange){
         rem=numBottles%numExchange;
        numBottles=Math.floor(numBottles/numExchange);
        maxNum+=numBottles;
        numBottles+=rem;
    }
    return maxNum;
    
};