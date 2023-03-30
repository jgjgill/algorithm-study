// https://www.acmicpc.net/problem/11725

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const check = Array.from({ length: N + 1 }, () => [])
  const parent = []
  let answer = ""

  for (let i = 1; i < N; i++) {
    const temp = input[i].split(" ").map(Number)
    check[temp[0]].push(temp[1])
    check[temp[1]].push(temp[0])
  }

  dfs(1, -1)

  for (let i = 2; i <= N; i++) {
    answer += `${parent[i]}\n`
  }

  console.log(answer)

  function dfs(x, par) {
    for (const current of check[x]) {
      if (current === par) continue
      parent[current] = x
      dfs(current, x)
    }
  }
}

solution()
