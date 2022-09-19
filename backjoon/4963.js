// https://www.acmicpc.net/problem/4963

const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const directions = [
  { dx: 1, dy: 0 },
  { dx: 1, dy: 1 },
  { dx: 1, dy: -1 },
  { dx: -1, dy: 0 },
  { dx: -1, dy: 1 },
  { dx: -1, dy: -1 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function createGraph(W, H, count) {
  const graph = new Array(H + 1).fill().map(() => [])

  for (let i = 1; i <= H; i++) {
    count++

    for (let t = 1; t <= W; t++) {
      graph[i][t] = Number(input[count].split(' ')[t - 1])
    }
  }

  return [graph, count]
}

function dfs(start, W, H, graph) {
  if (start.x < 1 || start.y < 1 || start.x > H || start.y > W) return
  if (!graph[start.x][start.y]) return

  graph[start.x][start.y] = 0

  for (const direction of directions) {
    const injectX = direction.dx + start.x
    const injectY = direction.dy + start.y

    dfs({ x: injectX, y: injectY }, W, H, graph)
  }
}

function solution(input) {
  let count = 0

  while (input[count] !== '0 0') {
    const [W, H] = input[count].split(' ').map(Number)
    const [graph, finish] = createGraph(W, H, count)
    let island = 0

    for (let i = 1; i <= H; i++) {
      for (let t = 1; t <= W; t++) {
        if (!graph[i][t]) continue

        dfs({ x: i, y: t }, W, H, graph)
        island++
      }
    }

    console.log(island)
    count = finish + 1
  }
}

solution(input)
