// https://leetcode.com/problems/subarray-sums-divisible-by-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const check = { 0: 1 }
  let sum = 0
  let answer = 0

  for (const num of nums) {
    sum = (((sum + num) % k) + k) % k

    if (sum in check) {
      answer += check[sum]
    }

    check[sum] = (check[sum] ?? 0) + 1
  }

  return answer
}
