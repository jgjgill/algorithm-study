// https://www.acmicpc.net/problem/11659

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const array = input[1].split(" ").map(Number)
  const temp = Array.from({ length: N + 1 }, () => 0)
  const answer = []

  for (let i = 0; i < N; i++) {
    temp[i + 1] += temp[i] + array[i]
  }

  for (let i = 2; i < 2 + M; i++) {
    const [start, end] = input[i].split(" ").map(Number)
    answer.push(temp[end] - temp[start - 1])
  }

  return answer.join("\n")
}

console.log(solution())
