// https://www.acmicpc.net/problem/3020

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, H] = input[0].split(" ").map(Number)
  const odd = Array.from({ length: H + 1 }, () => 0)
  const even = Array.from({ length: H + 1 }, () => 0)

  let min = Infinity
  let count = 0

  for (let i = 1; i <= N / 2; i++) {
    odd[Number(input[2 * i - 1])] += 1
    even[H - Number(input[2 * i]) + 1] += 1
  }

  for (let i = 1; i <= H; i++) {
    odd[H - i] += odd[H - i + 1]
    even[i] += even[i - 1]
  }

  for (let i = 1; i <= H; i++) {
    if (odd[i] + even[i] < min) {
      count = 1
      min = odd[i] + even[i]
    } else if (odd[i] + even[i] === min) {
      count += 1
    }
  }

  return `${min} ${count}`
}

console.log(solution())
