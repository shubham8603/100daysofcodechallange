/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = Array.from({ length: matrix[0].length }, () => Array(matrix.length).fill(0));
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            arr[j][i]=matrix[i][j];
        }
    }
    return arr;
};