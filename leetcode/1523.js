// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  if (low % 2 === 1 && high % 2 === 1) return ((high - low) / 2) + 1
  return (high - low) / 2
};