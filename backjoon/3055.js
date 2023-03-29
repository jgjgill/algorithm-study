const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [R, C] = input[0].split(" ").map(Number)
  const board = Array.from({ length: R }, () => [])
  const check_water = Array.from({ length: R }, () => Array(C).fill(-1))
  const check_water_visit = Array.from({ length: R }, () =>
    Array(C).fill(false)
  )
  const check_hedgehog = Array.from({ length: R }, () => Array(C).fill(-1))
  const check_hedgehog_visit = Array.from({ length: R }, () =>
    Array(C).fill(false)
  )

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]

  let answer_x
  let answer_y

  for (let i = 0; i < R; i++) {
    const temp = input[i + 1].split("")
    for (let t = 0; t < C; t++) {
      board[i][t] = temp[t]
      if (temp[t] === "D") {
        answer_x = i
        answer_y = t
      }
    }
  }

  bfsWater()
  bfsHedgehog()
  return check_hedgehog[answer_x][answer_y] === -1
    ? "KAKTUS"
    : check_hedgehog[answer_x][answer_y]

  function bfsWater() {
    const queue = []
    let index = 0

    for (let i = 0; i < R; i++) {
      const temp = input[i + 1].split("")
      for (let t = 0; t < C; t++) {
        if (temp[t] === "*") {
          queue.push(i)
          queue.push(t)
          check_water[i][t] = 0
          check_water_visit[i][t] = true
        }
      }
    }

    while (index < queue.length) {
      const x = queue[index]
      const y = queue[index + 1]
      index += 2

      for (const dir of dirs) {
        const nx = dir[0] + x
        const ny = dir[1] + y

        if (nx < 0 || ny < 0) continue
        if (nx >= R || ny >= C) continue
        if (check_water_visit[nx][ny]) continue
        if (board[nx][ny] !== ".") continue

        check_water_visit[nx][ny] = true
        check_water[nx][ny] = check_water[x][y] + 1
        queue.push(nx)
        queue.push(ny)
      }
    }
  }

  function bfsHedgehog() {
    const queue = []
    let index = 0

    for (let i = 0; i < R; i++) {
      const temp = input[i + 1].split("")
      for (let t = 0; t < C; t++) {
        if (temp[t] === "S") {
          queue.push(i)
          queue.push(t)
          check_hedgehog[i][t] = 0
          check_hedgehog_visit[i][t] = true
        }
      }
    }

    while (index < queue.length) {
      const x = queue[index]
      const y = queue[index + 1]
      index += 2

      for (const dir of dirs) {
        const nx = dir[0] + x
        const ny = dir[1] + y

        if (nx < 0 || ny < 0) continue
        if (nx >= R || ny >= C) continue
        if (board[nx][ny] !== "." && board[nx][ny] !== "D") continue
        if (check_hedgehog_visit[nx][ny]) continue
        if (
          check_water[nx][ny] !== -1 &&
          check_water[nx][ny] <= check_hedgehog[x][y] + 1
        )
          continue

        check_hedgehog_visit[nx][ny] = true
        check_hedgehog[nx][ny] = check_hedgehog[x][y] + 1
        queue.push(nx)
        queue.push(ny)
      }
    }
  }
}

console.log(solution())
