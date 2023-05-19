// https://www.acmicpc.net/problem/1913

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const F = Number(input[1])
  const check = Array.from({ length: N }, () => [])
  const dict = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  let count = N ** 2
  let direct = 0
  let x = 0
  let y = 0
  let temp

  while (count !== 0) {
    if (count === F) temp = `${x + 1} ${y + 1}`
    check[x][y] = count
    count -= 1

    direct = checkDirect(x + dict[direct][0], y + dict[direct][1], direct)
    x = x + dict[direct][0]
    y = y + dict[direct][1]
  }

  return check.reduce((acc, cur) => acc + cur.join(" ") + "\n", "") + temp

  function checkDirect(nx, ny, d) {
    if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
      d = (d + 1) % 4
    } else if (check[nx][ny]) {
      d = (d + 1) % 4
    }

    return d
  }
}

console.log(solution())
