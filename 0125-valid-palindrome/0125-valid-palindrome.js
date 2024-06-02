/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    if(s===null)return true;
    s=s.toLowerCase();
    s=s.replace(/[^a-zA-Z0-9]/g,'');
     let l=0;
    let r=s.length-1;
    let arr=s.split('');
    while(l<=r){
        if(arr[l]===arr[r]){
            l++;
            r--;
        }
        else {return false;}
    }
    return true;
};