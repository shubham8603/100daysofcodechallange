/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

if(x<0)x*(-1);
let n=x, num=0;
while(n>0){
num=(n%10)+10*num;
n=(n/10)|0;

}return num==x;
    
};