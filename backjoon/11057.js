// https://www.acmicpc.net/problem/11057

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])

  return dp(N)

  function dp(n) {
    const dy = Array.from({ length: n + 1 }, () => Array(10).fill(0))
    let answer = 0

    for (let i = 0; i <= 9; i++) {
      dy[1][i] = 1
    }

    for (let len = 2; len <= n; len++) {
      for (let num = 0; num <= 9; num++) {
        for (let prev = 0; prev <= num; prev++) {
          dy[len][num] += dy[len - 1][prev]
          dy[len][num] %= 10007
        }
      }
    }

    for (let i = 0; i <= 9; i++) {
      answer += dy[N][i]
      answer %= 10007
    }

    return answer
  }
}

console.log(solution())
