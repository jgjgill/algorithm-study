// https://www.acmicpc.net/problem/17626

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const dp = [null, 1]

  for (let i = 2; i <= N; i++) {
    let min = 4
    for (let t = 1; t ** 2 <= i; t++) {
      min = Math.min(min, dp[i - t ** 2])
    }
    dp[i] = min + 1
  }

  return dp[N]
}

console.log(solution())
