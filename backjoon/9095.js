// https://www.acmicpc.net/problem/9095

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const T = Number(input[0])
  const answer = []

  for (let i = 1; i <= T; i++) {
    const N = Number(input[i])
    answer.push(dp(N))
  }

  return answer.join("\n")

  function dp(n) {
    const dy = [null, 1, 2, 4]

    for (let i = 4; i <= 11; i++) {
      dy[i] = dy[i - 1] + dy[i - 2] + dy[i - 3]
    }

    return dy[n]
  }
}

console.log(solution())
