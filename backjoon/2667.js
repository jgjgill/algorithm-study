// https://www.acmicpc.net/problem/2667

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")
const N = Number(input[0])
const checks = new Array(N + 1).fill().map(() => new Array(N + 1).fill(false))
const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function createGraph(input) {
  const graph = new Array(N + 1).fill().map(() => [])

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= N; t++) {
      graph[i][t] = Number(input[i].trim().split("")[t - 1])
    }
  }
  return graph
}

let count = 0
const answer = []

function dfs(start, graph) {
  if (start.x < 1 || start.y < 1 || start.x > N || start.y > N) return
  if (!graph[start.x][start.y] || checks[start.x][start.y]) return

  checks[start.x][start.y] = true
  answer[count] = answer[count] ? answer[count] + 1 : 1

  for (const direction of directions) {
    const injectX = direction.dx + start.x
    const injectY = direction.dy + start.y

    dfs({ x: injectX, y: injectY }, graph)
  }
}

function solution(input) {
  const graph = createGraph(input)

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= N; t++) {
      if (checks[i][t] || !graph[i][t]) continue

      dfs({ x: i, y: t }, graph)
      count++
    }
  }

  answer.sort((a, b) => a - b).unshift(answer.length)
  return answer.join("\n")
}

console.log(solution(input))

function solution() {
  const N = Number(input.shift())
  const board = Array.from({ length: N }, () => [])
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]
  const answer = []
  let count = 0

  for (let i = 0; i < N; i++) {
    board[i] = input.shift().split("").map(Number)
  }

  for (let i = 0; i < N; i++) {
    for (let t = 0; t < N; t++) {
      if (board[i][t] === 1) {
        count += 1
        const check = dfs(i, t)
        answer.push(check)
      }
    }
  }

  answer.sort((a, b) => a - b)
  console.log(count)
  console.log(answer.join("\n"))

  function dfs(x, y) {
    const stack = []
    stack.push([x, y])
    let count = 1
    board[x][y] = 0

    while (stack.length !== 0) {
      const current = stack.pop()

      for (const dir of dirs) {
        const injectX = dir[0] + current[0]
        const injectY = dir[1] + current[1]
        if (injectX < 0 || injectY < 0) continue
        if (injectX >= N || injectY >= N) continue
        if (board[injectX][injectY] === 0) continue

        stack.push([injectX, injectY])
        board[injectX][injectY] = 0
        count += 1
      }
    }

    return count
  }
}

solution()
