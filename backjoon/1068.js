// https://www.acmicpc.net/problem/1068

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const parents = input[1].split(" ").map(Number)
  const D = Number(input[2])
  const child = Array.from({ length: N }, () => [])
  const leaf = Array.from({ length: N }, () => 0)
  let root

  for (let i = 0; i < N; i++) {
    if (parents[i] === -1) {
      root = i
      continue
    }

    child[parents[i]].push(i)
  }

  for (let i = 0; i < N; i++) {
    if (child[i].includes(D)) child[i].splice(child[i].indexOf(D), 1)
  }

  if (root !== D) dfs(root)

  return leaf[root]

  function dfs(x) {
    if (child[x].length === 0) leaf[x] = 1

    for (const node of child[x]) {
      dfs(node)
      leaf[x] += leaf[node]
    }
  }
}

console.log(solution())
