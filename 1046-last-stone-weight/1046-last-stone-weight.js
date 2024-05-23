/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>b-a);
    while(stones.length>1){
        let one=stones.shift();
        let two=stones.shift();
        if(one!==two){
            stones.push(one-two);
        }
        stones.sort((a,b)=>b-a);
    }
    return stones.length?stones[0]:0;
    
};