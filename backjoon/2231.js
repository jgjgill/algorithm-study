// https://www.acmicpc.net/problem/2231

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function createSum(n) {
  const check = String(n).split('')
  return n + check.reduce((acc, cur) => acc + Number(cur), 0)
}

function solution() {
  const N = Number(input[0])

  for (let i = 1; i < N; i++) {
    if (createSum(i) === N) return i
  }

  return 0
}

console.log(solution());
