// https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const check = {}
  let answer = 0

  for (const task of tasks) {
    check[task] = check[task] === undefined ? 1 : check[task] + 1
  }

  for (const key in check) {
    if (check[key] === 1) return -1
    answer += check[key] % 3 === 0 ? Math.floor(check[key] / 3) : Math.floor(check[key] / 3) + 1
  }

  return answer
};