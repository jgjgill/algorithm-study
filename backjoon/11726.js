// https://www.acmicpc.net/problem/11726

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])

  return dp(N)

  function dp(n) {
    const dy = [null, 1, 2]

    for (let i = 3; i <= N; i++) {
      dy[i] = (dy[i - 2] + dy[i - 1]) % 10007
    }

    return dy[n]
  }
}

console.log(solution())
