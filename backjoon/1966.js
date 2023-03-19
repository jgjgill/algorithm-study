// https://www.acmicpc.net/problem/1966

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const T = Number(input[0])

  for (let i = 1; i <= T; i++) {
    const [N, M] = input[2 * i - 1].split(" ").map(Number)
    const list = input[2 * i].split(" ").map(Number)
    const check_list = list.map((value, index) => [value, index])
    let count = 0

    list.sort((a, b) => b - a)

    while (check_list.length !== 0) {
      const [value, index] = check_list.shift()

      if (value < list[count]) check_list.push([value, index])
      else {
        count += 1
        if (index === M) {
          console.log(count)
          break
        }
      }
    }
  }
}

solution()
