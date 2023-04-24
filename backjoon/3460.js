const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const T = Number(input.shift())
  let index = 0

  while (index !== T) {
    index += 1
    const N = Number(input.shift())
    console.log(
      N.toString(2)
        .split("")
        .reverse()
        .reduce((acc, cur, idx) => {
          if (cur === "1") return acc + idx + " "
          else return acc
        }, "")
    )
  }
}

solution()
