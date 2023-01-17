// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set()

  nums.forEach((num) => {
    if (set.has(num)) set.delete(num)
    else set.add(num)
  })

  return [...set][0]
}
