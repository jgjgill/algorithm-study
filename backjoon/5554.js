// https://www.acmicpc.net/problem/5554

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  let sum = 0

  for (let i = 0; i < 4; i++) {
    const time = Number(input[i])
    sum += time
  }

  return `${Math.floor(sum / 60)}\n${sum % 60}`
}

console.log(solution())
