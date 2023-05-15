// https://www.acmicpc.net/problem/2563

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  const board = Array.from({length: 100}, () => new Array(100).fill(false))
  let count = 0

  for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(' ').map(Number)

    for (let nx = 0; nx < 10; nx++) {
      for (let ny = 0; ny < 10; ny++) {
        if (board[x + nx][y + ny]) continue

        board[x + nx][y + ny] = true
        count += 1
      }
    }
  }
  
  return count
}

console.log(solution());
