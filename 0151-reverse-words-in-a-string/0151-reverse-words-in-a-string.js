/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr=s.split(' ');
    var res='';
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]=='') continue;
        if(res.length>0) res+=' ';
        res+=arr[i];
    }
    return res;
    
};