// https://www.acmicpc.net/problem/2630

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  const board = createBoard()
  let white = 0
  let blue = 0

  division_conquer(0, 0, N)

  function division_conquer(startX, startY, n) {
    const set = new Set()
    for (let i = startX; i < startX + n; i++) {
      for (let t = startY; t < startY + n; t++) {
        set.add(board[i][t])
        
        if (set.size === 2) {
          division_conquer(startX, startY, n / 2)
          division_conquer(startX, startY + n / 2, n / 2)
          division_conquer(startX + n / 2, startY, n / 2)
          division_conquer(startX + n / 2, startY + n / 2, n / 2)
          return
        }
      }
    }

    if (set.has(0)) white += 1
    if (set.has(1)) blue += 1
  }
  
  
  function createBoard() {
    const board = Array.from(Array(N), () => new Array(N))

    for (let i = 0; i < N; i ++) {
      const temp = input[i + 1].split(' ').map(Number)
      for (let t = 0; t < N; t++) {
        board[i][t] = temp[t]
      }
    }
    return board
  }

  return `${white}\n${blue}`
}

console.log(solution())