// https://www.acmicpc.net/problem/1182

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, S] = input[0].split(" ").map(Number)
  const list = input[1].split(" ").map(Number)
  let answer = 0

  bt(0, 0)

  if (S === 0) answer -= 1

  return answer

  function bt(index, num) {
    if (index === N) {
      if (num === S) answer += 1
      return
    }

    bt(index + 1, num + list[index])
    bt(index + 1, num)
  }
}

console.log(solution())
