// https://www.acmicpc.net/problem/6593

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().split('\n')
const directions = [
  { dx: 1, dy: 0, dz: 0 },
  { dx: -1, dy: 0, dz: 0 },
  { dx: 0, dy: 1, dz: 0 },
  { dx: 0, dy: -1, dz: 0 },
  { dx: 0, dy: 0, dz: 1 },
  { dx: 0, dy: 0, dz: -1 },
]

let nowIndex = 0

function createGraph(L, R, C) {
  const graph = new Array(L + 1)
    .fill()
    .map(() => new Array(R + 1).fill().map(() => []))
  let start

  for (let i = 1; i <= L; i++) {
    for (let t = 1; t <= R; t++) {
      for (let q = 1; q <= C; q++) {
        graph[i][t][q] = input[nowIndex].split('')[q - 1]
        if (graph[i][t][q] === 'S') start = [i, t, q]
      }
      nowIndex++
    }
    nowIndex++
  }

  return [graph, start]
}

function bfs(graph, start, L, R, C) {
  const queue = []
  let index = 0

  queue.push({ l: start[0], r: start[1], c: start[2], time: 0 })

  while (index < queue.length) {
    const { l, r, c, time } = queue[index++]

    if (l < 1 || r < 1 || c < 1 || l > L || r > R || c > C) continue
    if (graph[l][r][c] === '#') continue
    if (graph[l][r][c] === 'E') return `Escaped in ${time} minute(s).`

    graph[l][r][c] = '#'

    for (const direction of directions) {
      const injectX = direction.dx + c
      const injectY = direction.dy + r
      const injectZ = direction.dz + l
      const injectTime = time + 1

      queue.push({ l: injectZ, r: injectY, c: injectX, time: injectTime })
    }
  }

  return 'Trapped!'
}

function solution() {
  while (true) {
    const [L, R, C] = input[nowIndex].split(' ').map(Number)

    if (L === 0 && R === 0 && C === 0) break
    nowIndex++
    const [graph, start] = createGraph(L, R, C)

    const answer = bfs(graph, start, L, R, C)
    console.log(answer)
  }
}

solution()
