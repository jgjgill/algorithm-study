// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  let start = findStart(park)

  for (const route of routes) {
    const [dir, move] = route.split(" ")
    const number_move = Number(move)
    const select_dir = selectDir(dir)

    if (possible(park, start, select_dir, number_move)) {
      start = changeStart(start, select_dir, number_move)
    }
  }

  return start
}

function findStart(park) {
  let start

  park.forEach((row, index) => {
    if (row.indexOf("S") !== -1) start = [index, row.indexOf("S")]
  })

  return start
}

function selectDir(dir) {
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  if (dir === "N") return direction[0]
  if (dir === "S") return direction[1]
  if (dir === "W") return direction[2]
  if (dir === "E") return direction[3]
}

function possible(park, start, dir, move) {
  const max_row = park.length
  const max_col = park[0].length

  for (let i = 0; i < move; i++) {
    const row = start[0] + dir[0]
    const col = start[1] + dir[1]
    if (row >= max_row || row < 0) return false
    if (col >= max_col || col < 0) return false
    if (park[row][col] === "X") return false

    start = [row, col]
  }

  return true
}

function changeStart(start, dir, move) {
  for (let i = 0; i < move; i++) {
    start = [start[0] + dir[0], start[1] + dir[1]]
  }

  return start
}
