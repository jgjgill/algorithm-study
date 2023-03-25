// https://www.acmicpc.net/problem/2805

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const woods = input[1].split(" ").map(Number)

  let left = 0
  let right = Math.max(...woods)
  let answer = 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    const check_m = calcWood(woods, mid)

    if (check_m >= M) {
      answer = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return answer

  function calcWood(woods, value) {
    let sum = 0

    for (const wood of woods) {
      if (wood > value) sum += wood - value
    }

    return sum
  }
}

console.log(solution())
