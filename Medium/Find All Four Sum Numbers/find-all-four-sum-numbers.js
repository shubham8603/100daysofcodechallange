//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function printArray(res, n) {
    let s="";
    for(let i=0;i<n;i++){
        
        for(let j=0;j<res[i].length;j++){
            s+=res[i][j];
            s+=" ";
        }
        s+="$";
        
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let k = input_ar1[1];
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let arr = [];
        for(let i=0;i<n;i++){
            arr.push(input_ar1[i]);
        }
        let obj = new Solution();
        let res = obj.fourSum(arr, n, k);
        if(res.length===0) {
            console.log(-1);
        } else {
            printArray(res,res.length);
        }
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[][]} 
 */
 
class Solution {
    fourSum(arr, n, k){

        let result = [];
        arr.sort((a, b) => a - b); 

        for (let i = 0; i < n - 3; i++) {
            
            if (i > 0 && arr[i] === arr[i - 1]) {
                continue;
            }

            for (let j = i + 1; j < n - 2; j++) {
          
                if (j > i + 1 && arr[j] === arr[j - 1]) {
                    continue;
                }

                let left = j + 1;
                let right = n - 1;

                while (left < right) {
                    let sum = arr[i] + arr[j] + arr[left] + arr[right];
                    if (sum === k) {
                        result.push([arr[i], arr[j], arr[left], arr[right]]);
                        left++;
                        right--;

                        while (left < right && arr[left] === arr[left - 1]) {
                            left++;
                        }
                        while (left < right && arr[right] === arr[right + 1]) {
                            right--;
                        }
                    } else if (sum < k) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }

        return result;
    }
        
    
}
