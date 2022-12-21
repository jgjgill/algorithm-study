// https://leetcode.com/problems/possible-bipartition/

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const adj_check = Array.from({ length: n + 1 }, () => [])
  const colors = Array.from({ length: n + 1 }, () => -1)

  for (const [a, b] of dislikes) {
    adj_check[a].push(b)
    adj_check[b].push(a)
  }

  for (let i = 1; i <= n; i++) {
    if (colors[i] !== -1) continue
    if (!dfs(i, 0)) return false
  }

  return true

  function dfs(index, color) {
    colors[index] = color

    for (const adj of adj_check[index]) {
      if (colors[adj] === colors[index]) return false
      if (colors[adj] !== -1) continue
      if (!dfs(adj, 1 - color)) return false
    }

    return true
  }
}
