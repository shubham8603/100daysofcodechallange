/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length)
    return false;
     let S=s.split('').sort();
     let T=t.split('').sort();
     for(let i=0;i<s.length;i++){
         if(S[i]!=T[i])
         return false;
     }   


        return true;
    
};