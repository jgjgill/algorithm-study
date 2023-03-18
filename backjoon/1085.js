// https://www.acmicpc.net/problem/1085

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [x, y, w, h] = input[0].split(' ').map(Number)
  const answer = Math.min(x, y, w - x, h - y)
  
  return answer;
}

console.log(solution());
