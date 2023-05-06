// https://www.acmicpc.net/problem/10817

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const array = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)

  return array[1]
}

console.log(solution())
