// https://www.acmicpc.net/problem/14502

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: -1 },
  { dx: 0, dy: 1 },
]
const blanks = []
const viruses = []

function createGraph() {
  const graph = new Array(N + 1).fill().map(() => [])

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= M; t++) {
      graph[i][t] = Number(input[i].split(' ')[t - 1])

      if (graph[i][t] === 2) viruses.push([i, t])
      if (graph[i][t] === 0) blanks.push([i, t])
    }
  }

  return graph
}

function createCheck(graph) {
  const check = new Array(N + 1).fill().map(() => new Array(M + 1).fill(false))

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= M; t++) {
      if (graph[i][t] === 1) {
        check[i][t] = true
      }
    }
  }

  return check
}

function dfs(start, check, graph) {
  const stack = []
  let blankCheck = 0
  stack.push({ x: start.x, y: start.y })

  while (stack.length) {
    const current = stack.pop()
    if (current.x < 1 || current.y < 1 || current.x > N || current.y > M)
      continue
    if (check[current.x][current.y]) continue
    if (!graph[current.x][current.y]) blankCheck++

    check[current.x][current.y] = true

    for (const direction of directions) {
      stack.push({ x: direction.dx + current.x, y: direction.dy + current.y })
    }
  }

  return blankCheck
}

let answer = 0

function bt(count, index, graph) {
  if (count === 3) {
    const check = createCheck(graph)

    let blankCount = blanks.length - 3

    for (const virus of viruses) {
      const blankCheck = dfs({ x: virus[0], y: virus[1] }, check, graph)
      blankCount -= blankCheck
    }

    answer = Math.max(answer, blankCount)
    return
  }

  for (let i = index; i < blanks.length; i++) {
    if (graph[blanks[i][0]][blanks[i][1]] === 1) continue

    graph[blanks[i][0]][blanks[i][1]] = 1
    bt(count + 1, i, graph)
    graph[blanks[i][0]][blanks[i][1]] = 0
  }
}

function solution() {
  const graph = createGraph()
  bt(0, 0, graph)

  return answer
}

console.log(solution())
