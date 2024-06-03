/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var a=[];
    for(let i=0;i<=s.length-1;i++)
    {
        if(s[i]==="(" || s[i]==="{" || s[i]==="["){
            {a.push(s[i]);
           }
        }
         else if((s[i]===")" && a[a.length-1]!="(")||
          (s[i]=="}" && a[a.length-1]!="{")|| 
          (s[i]=="]"&& a[a.length-1]!="[") || a.length===0)
        return false;
        else
        a.pop();
    }
    return (a.length===0)
    
};