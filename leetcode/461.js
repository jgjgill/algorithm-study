// https://leetcode.com/problems/hamming-distance/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2)
    y = y.toString(2)
    
    const length = Math.max(x.length, y.length)
    let answer = 0

    x = x.padStart(length, '0')
    y = y.padStart(length, '0')

    for (let i = 0; i < length; i++) {
      if (x[i] !== y[i]) answer += 1
    }
    
    return answer
};