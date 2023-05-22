// https://www.acmicpc.net/problem/17266

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const M = Number(input[1])
  const x = input[2].split(" ").map(Number)

  let min = 1
  let max = N
  let height = 1

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)

    if (checkLight(mid)) {
      max = mid - 1
      height = mid
    } else {
      min = mid + 1
    }
  }

  return height

  function checkLight(mid) {
    if (x[0] > mid) return false
    if (N - x.at(-1) > mid) return false

    for (let i = 0; i < M - 1; i++) {
      if ((x[i + 1] - x[i]) / 2 > mid) return false
    }

    return true
  }
}

console.log(solution())
