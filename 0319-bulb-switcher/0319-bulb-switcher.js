/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let res=0;
    let x=1;
    while(n>0){
        n--;
        res++;
        n=n-(x*2);
        x++;
    }
    return res;
    
};