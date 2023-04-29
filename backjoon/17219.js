// https://www.acmicpc.net/problem/17219

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  let index = 0
  const [N, M] = input[index++].split(" ").map(Number)
  const check = {}
  const answer = []

  for (let i = 0; i < N; i++) {
    const [site, password] = input[index++].trim().split(" ")
    check[site] = password
  }

  for (let i = 0; i < M; i++) {
    answer.push(check[input[index++].trim()])
  }

  return answer.join("\n")
}

console.log(solution())
