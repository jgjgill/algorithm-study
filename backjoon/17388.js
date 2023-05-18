// https://www.acmicpc.net/problem/17388

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [Soongsil, Korea, Hanyang] = input[0].split(" ").map(Number)
  const check = ["Soongsil", "Korea", "Hanyang"]
  const min = Math.min(Soongsil, Korea, Hanyang)

  return Soongsil + Korea + Hanyang >= 100
    ? "OK"
    : check[[Soongsil, Korea, Hanyang].findIndex((score) => score === min)]
}

console.log(solution())
