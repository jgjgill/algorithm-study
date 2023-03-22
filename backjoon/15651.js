const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const check = []
  let answer = ""

  bt()
  console.log(answer)

  function bt() {
    if (M === check.length) {
      answer += check.join(" ")
      answer += "\n"
      return
    }

    for (let i = 1; i <= N; i++) {
      check.push(i)
      bt()
      check.pop()
    }
  }
}

solution()
