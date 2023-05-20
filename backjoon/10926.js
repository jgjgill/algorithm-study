// https://www.acmicpc.net/problem/10926

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const id = input[0]

  return id + "??!"
}

console.log(solution())
