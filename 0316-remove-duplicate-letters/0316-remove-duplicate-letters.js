/**
* @param {string} s
* @return {string}
*/
var removeDuplicateLetters = function(s) {
let count={};
for(let char of s){
if(!count[char])count[char]=1;
else 
count[char]++;
}
let stack=[];
let instack={};
for(let char of s){
count[char]--;
if(instack[char])continue;

while(stack.length>0 && stack[stack.length-1]>char && count[stack[stack.length-1]]>0){
    let poped=stack.pop();
    instack[poped]=false;
}

stack.push(char);
instack[char]=true;

}
return stack.join('');

};