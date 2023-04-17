// https://www.acmicpc.net/problem/11053

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const A = input[1].split(" ").map(Number)
  const dp = Array.from({ length: N }, () => 0)

  for (let i = 0; i < N; i++) {
    let max = 0
    for (let t = 0; t <= i; t++) {
      if (A[t] < A[i]) {
        max = Math.max(max, dp[t])
      }
    }

    dp[i] = max + 1
  }

  return Math.max(...dp)
}

console.log(solution())
