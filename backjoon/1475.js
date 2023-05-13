// https://www.acmicpc.net/problem/1475

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const check = Array.from({ length: 10 }, () => 0)
  const N = input[0].split("").map(Number)
  let count = 0

  N.forEach((node) => {
    if (node === 6 || node === 9) {
      check[6] += 0.5
      check[9] += 0.5
    } else {
      check[node] += 1
    }

    count = Math.max(count, Math.ceil(check[node]))
  })

  return count
}

console.log(solution())
