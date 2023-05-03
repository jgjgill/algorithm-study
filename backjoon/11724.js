// https://www.acmicpc.net/problem/11724

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const dicts = Array.from({ length: N + 1 }, () => [])
  const visit = Array.from({ length: N + 1 }, () => false)
  let answer = 0

  for (let i = 1; i <= M; i++) {
    const [start, end] = input[i].split(" ").map(Number)
    dicts[start].push(end)
    dicts[end].push(start)
  }

  for (let i = 1; i <= N; i++) {
    if (visit[i]) continue
    dfs(i)
    answer += 1
  }

  function dfs(index) {
    visit[index] = true

    for (const child of dicts[index]) {
      if (visit[child]) continue

      dfs(child)
    }
  }

  return answer
}

console.log(solution())
