/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
        let max = -1
    
    const map = {}
    
    for(const number of arr) {
        if(map[number]) {
            map[number] += 1
        } else {
            map[number] = 1
        }
    }
    
    for(const key in map) {
        if(Number(key) === map[key] && map[key] > max) {
            max = map[key]
        }
    }
    
    return max
    };

