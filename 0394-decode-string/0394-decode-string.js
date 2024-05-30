/**
* @param {string} s
* @return {string}
*/
var decodeString = function(s) {
let index = 0;

function decode() {
    let result = '';
    while (index < s.length && s[index] !== ']') {
        if (!isNaN(s[index])) {
        
            let num = 0;
            while (index < s.length && !isNaN(s[index])) {
                num = num * 10 + parseInt(s[index]);
                index++;
            }
        
            index++; 
            
            let decodedStr = decode();
        
            result += decodedStr.repeat(num);
            
            index++;
        } else {
            
            result += s[index];
            index++;
        }
    }
    return result;
}

return decode();
};