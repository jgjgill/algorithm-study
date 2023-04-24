const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, K] = input[0].split(" ").map(Number)
  const list = []

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) list.push(i)
  }

  return list[K - 1] || 0
}

console.log(solution())
