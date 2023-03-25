// https://www.acmicpc.net/problem/2110

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const list = []

  for (let i = 1; i <= N; i++) {
    list.push(Number(input[i]))
  }
  
  list.sort((a, b) => a - b)

  let left = 0
  let right = Math.max(...list) - Math.min(...list)
  let answer = 0
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (validateM(list, mid, M)) {
      answer = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return answer


  function validateM(list, mid, M) {
    let sum = 1
    let check = list[0]

    for (let i = 1; i < list.length; i++) {
      if (list[i] - check >= mid) {
        sum += 1
        check = list[i]
      }
    }

    return sum >= M
  }

}

console.log(solution())
