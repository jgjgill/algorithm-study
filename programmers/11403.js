// https://www.acmicpc.net/problem/11403

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const answer = Array.from({ length: N }, () => [])
  const check = Array.from({ length: N }, () => [])

  for (let i = 0; i < N; i++) {
    const temp = input[i + 1].split(" ").map(Number)

    for (let t = 0; t < N; t++) {
      answer[i][t] = 0
      if (temp[t] === 1) check[i].push(t)
    }
  }

  for (let i = 0; i < N; i++) {
    dfs(i, i)
  }

  function dfs(index, now) {
    for (const child of check[now]) {
      if (answer[index][child] === 1) continue
      answer[index][child] = 1

      dfs(index, child)
    }
  }

  return answer.map((item) => item.join(" ")).join("\n")
}

console.log(solution())
