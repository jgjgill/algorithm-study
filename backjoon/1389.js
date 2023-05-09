// https://www.acmicpc.net/problem/1389

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const node = Array.from({ length: N + 1 }, () => [])
  const count = Array.from({ length: N + 1 }, () => 0)

  for (let i = 1; i <= M; i++) {
    const temp = input[i].split(" ").map(Number)
    node[temp[0]].push(temp[1])
    node[temp[1]].push(temp[0])
  }

  for (let i = 1; i <= N; i++) {
    const visit = Array.from({ length: N + 1 }, () => false)
    const check = Array.from({ length: N + 1 }, () => 0)

    visit[i] = true
    bfs(i, visit, check)
    count[i] = check.reduce((acc, cur) => acc + cur)
  }

  function bfs(i, visit, check) {
    const queue = [i]
    let index = 0

    while (index < queue.length) {
      const current = queue[index]
      const parent = node[current]
      index += 1

      for (const child of parent) {
        if (visit[child]) continue

        check[child] = check[current] + 1
        visit[child] = true
        queue.push(child)
      }
    }
  }

  return count.reduce((acc, cur, idx) => {
    if (acc[0] <= cur) return [acc[0], acc[1]]
    else return [cur, idx]
  })[1]
}

console.log(solution())
