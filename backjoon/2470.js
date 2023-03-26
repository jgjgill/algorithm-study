// https://www.acmicpc.net/problem/2470

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const list = input[1].split(" ").map(Number)
  let min = Infinity
  let v1 = 0
  let v2 = 0

  list.sort((a, b) => a - b)

  for (let i = 0; i < N - 1; i++) {
    const res = binarySearch(list, i + 1, N - 1, -list[i])

    if (
      i + 1 <= res - 1 &&
      res - 1 <= N - 1 &&
      Math.abs(list[res - 1] + list[i]) < min
    ) {
      min = Math.abs(list[res - 1] + list[i])
      v1 = list[i]
      v2 = list[res - 1]
    }

    if (i + 1 <= res && res <= N - 1 && Math.abs(list[res] + list[i]) < min) {
      min = Math.abs(list[res] + list[i])
      v1 = list[i]
      v2 = list[res]
    }
  }

  return `${v1} ${v2}`

  function binarySearch(list, left, right, value) {
    let res = right + 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (list[mid] >= value) {
        res = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return res
  }
}

function solution() {
  const N = Number(input[0])
  const list = input[1].split(' ').map(Number)

  list.sort((a, b) => a - b)

  let left = 0
  let right = N - 1
  let best_sum = Infinity
  let v1 = 0
  let v2 = 0

  while(left < right) {
    let sum = list[right] + list[left]

    if (Math.abs(sum) < best_sum) {
      best_sum = Math.abs(sum)
      v1 = list[left]
      v2 = list[right]
    }

    if (sum > 0) right -= 1
    else left += 1
  }

  return `${v1} ${v2}`
}

console.log(solution())
