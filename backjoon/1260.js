// https://www.acmicpc.net/problem/1260

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const N = Number(input[0].split(" ")[0])
const M = Number(input[0].split(" ")[1])
const V = Number(input[0].split(" ")[2])

const graph = new Array(N + 1)

for (let i = 0; i < graph.length; i++) {
  graph[i] = []
}

for (let i = 0; i < M; i++) {
  const [parent, child] = input[i + 1].split(" ").map(Number)
  graph[parent].push(child)
  graph[child].push(parent)
}

graph.forEach((item) => {
  item.sort((a, b) => a - b)
})

const checks = new Array(N + 1).fill(false)
const answer = []

function dfs(start) {
  if (checks[start]) return

  checks[start] = true
  answer.push(start)

  for (const node of graph[start]) {
    dfs(node)
  }

  return answer
}

function bfs(start) {
  const checks = new Array(N + 1).fill(false)
  const queue = []
  const answer = []

  let index = 0

  queue.push(start)

  while (index < queue.length) {
    const current = index++

    if (!checks[queue[current]]) {
      checks[queue[current]] = true
      answer.push(queue[current])

      for (const node of graph[queue[current]]) {
        queue.push(node)
      }
    }
  }

  return answer
}

function solution(input) {
  const dfsAnswer = dfs(V).join(" ")
  const bfsAnswer = bfs(V).join(" ")

  return dfsAnswer + "\n" + bfsAnswer
}

console.log(solution())

function solution() {
  const [N, M, V] = input[0].split(" ").map(Number)
  const board = Array.from({ length: N + 1 }, () => [])
  const visit = Array.from({ length: N + 1 }, () => false)
  const dfs_ans = []
  const bfs_ans = []

  for (let i = 1; i <= M; i++) {
    const [start, end] = input[i].split(" ").map(Number)
    board[start].push(end)
    board[end].push(start)
  }

  for (let i = 0; i < board.length; i++) {
    board[i].sort((a, b) => a - b)
  }

  dfs(V)
  console.log(dfs_ans.join(" "))
  for (let i = 1; i <= N; i++) visit[i] = false
  bfs(V)
  console.log(bfs_ans.join(" "))

  function dfs(x) {
    visit[x] = true
    dfs_ans.push(x)

    for (let i = 0; i < board[x].length; i++) {
      if (visit[board[x][i]]) continue

      dfs(board[x][i])
    }
  }

  function bfs(x) {
    const queue = []
    let index = 0
    visit[x] = true
    queue.push(x)
    bfs_ans.push(x)

    while (index < queue.length) {
      const current = queue[index]
      index += 1

      for (let i = 0; i < board[current].length; i++) {
        if (visit[board[current][i]]) continue

        queue.push(board[current][i])
        bfs_ans.push(board[current][i])
        visit[board[current][i]] = true
      }
    }
  }
}

solution()
