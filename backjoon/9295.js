// https://www.acmicpc.net/problem/9295

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const T = Number(input[0])
  const answer = []

  for (let i = 1; i <= T; i++) {
    const [first, second] = input[i].split(" ").map(Number)
    answer.push(`Case ${i}: ${first + second}`)
  }

  return answer.join("\n")
}

console.log(solution())
