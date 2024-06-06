/**
* @param {number[][]} mat
* @return {number}
*/
var diagonalSum = function(mat) {
let res=0;
let n=mat.length-1;
for(let i=0;i<=n;i++){
    res+=mat[i][i];
    if(i!=n-i)
    res+=mat[i][n-i];
}
return res;

};