// https://www.acmicpc.net/problem/16928

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input.shift().split(" ").map(Number)
  const visit = Array.from({ length: 101 }, () => false)
  const check = {}
  let answer = Infinity

  for (let i = 0; i < N + M; i++) {
    const [start, end] = input.shift().split(" ").map(Number)
    check[start] = end
  }

  return bfs(1, 0)

  function bfs(now, count) {
    const queue = [[now, count]]
    let index = 0
    visit[now] = true

    while (index < queue.length) {
      const [cur, cur_count] = queue[index]
      index += 1

      for (let i = 1; i <= 6; i++) {
        const move_now = cur + i
        const move_count = cur_count + 1

        if (move_now === 100) return move_count
        if (move_now > 100) continue
        if (visit[move_now]) continue
        if (visit[check[move_now]]) continue
        if (check[move_now]) {
          queue.push([check[move_now], move_count])
          visit[check[move_now]] = true
        } else {
          queue.push([move_now, move_count])
          visit[move_now] = true
        }
      }
    }
  }
}

console.log(solution())
