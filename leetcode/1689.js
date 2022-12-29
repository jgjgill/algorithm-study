// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  return n.split('').reduce((acc, cur) => acc > cur ? acc : cur, 0)
};