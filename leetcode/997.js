// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const check = Array.from({ length: n + 1 }, () => [])
  const set = new Set()

  if (n === 1 && trust.length === 0) return 1

  for (const [a, b] of trust) {
    check[b].push(a)
    set.add(a)
  }

  const judge = check.findIndex((item) => item.length === n - 1)

  return set.has(judge) ? -1 : judge
}
