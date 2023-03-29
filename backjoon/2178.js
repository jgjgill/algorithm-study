// https://www.acmicpc.net/problem/2178

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map(Number)

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function createGraph(input) {
  const graph = []

  for (let i = 1; i <= N; i++) {
    graph[i] = []
  }

  for (let i = 0; i < N; i++) {
    for (let t = 0; t < M; t++) {
      graph[i + 1][t + 1] = Number(input[i + 1].split('')[t])
    }
  }

  return graph
}

function bfs(graph) {
  const queue = []

  let index = 0

  queue.push({ x: 1, y: 1 })

  while (index < queue.length) {
    const current = index++

    for (const direction of directions) {
      const x = queue[current].x + direction.dx
      const y = queue[current].y + direction.dy

      if (x <= N && x > 0 && y <= M && y > 0) {
        if (graph[x][y] === 1) {
          queue.push({ x, y })
          graph[x][y] = graph[queue[current].x][queue[current].y] + 1
        }
      }
    }
  }

  return graph[N][M]
}

function solution(input) {
  const graph = createGraph(input)
  const answer = bfs(graph)

  return answer
}

console.log(solution(input))

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const board = Array.from({ length: N }, () => [])
  const check = Array.from({ length: N }, () => Array(M).fill(-1))
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  for (let i = 0; i < N; i++) {
    const temp = input[i + 1].split("").map(Number)
    for (let t = 0; t < M; t++) {
      board[i][t] = temp[t]
    }
  }
  bfs()

  return check[N - 1][M - 1]

  function bfs() {
    const queue = []
    queue.push(0)
    queue.push(0)
    check[0][0] = 1
    let index = 0

    while (index < queue.length) {
      const x = queue[index]
      const y = queue[index + 1]
      index += 2

      for (const dir of dirs) {
        const injectX = x + dir[0]
        const injectY = y + dir[1]

        if (injectX < 0 || injectY < 0) continue
        if (injectX >= N || injectY >= M) continue
        if (check[injectX][injectY] !== -1) continue
        if (board[injectX][injectY] === 0) continue

        queue.push(injectX)
        queue.push(injectY)
        check[injectX][injectY] = check[x][y] + 1
      }
    }
  }
}

console.log(solution())