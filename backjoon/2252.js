// https://www.acmicpc.net/problem/2252

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const indeg = Array.from({ length: N + 1 }, () => 0)
  const child = Array.from({ length: N + 1 }, () => [])
  const answer = []
  const queue = []
  let index = 0

  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(" ").map(Number)
    child[A].push(B)
    indeg[B] += 1
  }

  for (let i = 1; i <= N; i++) {
    if (indeg[i] === 0) queue.push(i)
  }

  while (index < queue.length) {
    answer.push(queue[index])

    for (const node of child[queue[index]]) {
      indeg[node] -= 1
      if (indeg[node] === 0) queue.push(node)
    }

    index += 1
  }

  return answer.join(" ")
}

console.log(solution())
