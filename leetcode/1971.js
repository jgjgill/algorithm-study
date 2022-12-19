// https://leetcode.com/problems/find-if-path-exists-in-graph/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => new Set())
  const check = new Set()

  for (const [first, second] of edges) {
    graph[first].add(second)
    graph[second].add(first)
  }

  return dfs(source)

  function dfs(source) {
    if (source === destination) return true
    if (check.has(source)) return false

    check.add(source)

    for (const current of graph[source]) {
      if (dfs(current)) return true
    }

    return false
  }
}
