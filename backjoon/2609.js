// https://www.acmicpc.net/problem/2609

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [a, b] = input[0].split(' ').map(Number)
  let i = a
  let j = b

  while (i % j !== 0) {
    const n = i % j;
    if (n !== 0) {
      i = j
      j = n
    }
  }
  
  console.log(j)
  console.log(a * b / j)
}

solution();
