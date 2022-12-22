// https://leetcode.com/problems/sum-of-distances-in-tree/
// https://leetcode.com/problems/sum-of-distances-in-tree/solutions/130611/sum-of-distances-in-tree/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  const adj = Array.from({ length: n }, () => [])
  const count = Array.from({ length: n }, () => 1)
  const answer = Array.from({ length: n }, () => 0)

  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]].push(edges[i][1])
    adj[edges[i][1]].push(edges[i][0])
  }

  dfs(0, -1)
  dfs2(0, -1)

  return answer

  function dfs(node, parent) {
    for (const child of adj[node]) {
      if (child === parent) continue

      dfs(child, node)
      count[node] += count[child]
      answer[node] += answer[child] + count[child]
    }
  }

  function dfs2(node, parent) {
    for (const child of adj[node]) {
      if (child === parent) continue
      answer[child] = answer[node] - count[child] + n - count[child]
      dfs2(child, node)
    }
  }
}
