// https://www.acmicpc.net/problem/1676

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  let answer = 0

  for (let i = 1; i <= N; i++) {
    if (i % 5 === 0) answer += 1
    if (i % 25 === 0) answer += 1
    if (i % 125 === 0) answer += 1
  }

  return answer
}

console.log(solution());
