// https://www.acmicpc.net/problem/1005

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  let index_check = 0
  const T = Number(input[index_check++])
  const answer = []

  for (let i = 0; i < T; i++) {
    const [N, K] = input[index_check++].split(" ").map(Number)
    const craft_times = input[index_check++].split(" ").map(Number)
    const indeg = Array.from({ length: N + 1 }, () => 0)
    const child = Array.from({ length: N + 1 }, () => [])
    const done = Array.from({ length: N + 1 }, () => 0)
    const queue = []
    let index = 0

    for (let i = 0; i < K; i++) {
      const [A, B] = input[index_check++].split(" ").map(Number)
      child[A].push(B)
      indeg[B] += 1
    }

    for (let i = 1; i <= N; i++) {
      if (indeg[i] === 0) {
        queue.push(i)
        done[i] = craft_times[i - 1]
      }
    }

    while (index < queue.length) {
      const current = queue[index]

      for (const node of child[current]) {
        indeg[node] -= 1
        if (indeg[node] === 0) queue.push(node)
        done[node] = Math.max(done[node], done[current] + craft_times[node - 1])
      }

      index += 1
    }
    answer.push(done[Number(input[index_check++])])
  }

  return answer.join("\n")
}

console.log(solution())
