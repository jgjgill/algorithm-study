// https://www.acmicpc.net/problem/11651

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  const array = []

  for (let i =1; i <= N; i++) {
    const temp = input[i].split(' ').map(Number)
    array.push(temp)
  }

  array.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  return array.reduce((acc, cur) => acc + cur.join(' ') + '\n', "")
}

console.log(solution());
