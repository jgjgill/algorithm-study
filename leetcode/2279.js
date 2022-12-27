// https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  const n = rocks.length
  const check = []

  for (let i = 0; i < n; i++) {
    check[i] = capacity[i] - rocks[i] 
  }
  
  check.sort((a, b) => b - a)

  while (additionalRocks !== 0) {
    if (check.length === 0) break
    if (additionalRocks < check.at(-1)) break

      additionalRocks -= check.at(-1)
      check.pop()
  }

  return n - check.length
};