// https://school.programmers.co.kr/learn/courses/30/lessons/159993

function solution(maps) {
  const x_length = maps.length
  const y_length = maps[0].length
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const lever_board = Array.from({ length: x_length }, () => Array())
  const exit_board = Array.from({ length: x_length }, () => Array())
  let start
  let lever
  let exit

  for (let i = 0; i < x_length; i++) {
    for (let t = 0; t < y_length; t++) {
      lever_board[i][t] = maps[i][t]
      exit_board[i][t] = maps[i][t]

      if (maps[i][t] === "S") start = [i, t]
      if (maps[i][t] === "L") lever = [i, t]
      if (maps[i][t] === "E") exit = [i, t]
    }
  }

  const lever_time = bfs_lever(start, lever_board)

  if (lever_time == -1) return -1
  else return bfs_exit(lever, lever_time, exit_board)

  function bfs_lever(lever, lever_board) {
    const stack = [[lever[0], lever[1]]]
    let index = 0
    lever_board[lever[0]][lever[1]] = 0

    while (index < stack.length) {
      const [cur_x, cur_y] = stack[index]
      index += 1

      for (const dir of dirs) {
        const inj_x = dir[0] + cur_x
        const inj_y = dir[1] + cur_y

        if (inj_x < 0 || inj_y < 0) continue
        if (inj_x >= x_length || inj_y >= y_length) continue
        if (lever_board[inj_x][inj_y] === "X") continue
        if (lever_board[inj_x][inj_y] === "L")
          return lever_board[cur_x][cur_y] + 1
        if (
          lever_board[inj_x][inj_y] === "O" ||
          lever_board[inj_x][inj_y] === "E"
        ) {
          lever_board[inj_x][inj_y] = lever_board[cur_x][cur_y] + 1
          stack.push([inj_x, inj_y])
        }
      }
    }
    return -1
  }

  function bfs_exit(exit, time, exit_board) {
    const stack = [[exit[0], exit[1]]]
    let index = 0
    exit_board[exit[0]][exit[1]] = time

    while (index < stack.length) {
      const [cur_x, cur_y] = stack[index]
      index += 1

      for (const dir of dirs) {
        const inj_x = dir[0] + cur_x
        const inj_y = dir[1] + cur_y

        if (inj_x < 0 || inj_y < 0) continue
        if (inj_x >= x_length || inj_y >= y_length) continue
        if (exit_board[inj_x][inj_y] === "X") continue
        if (exit_board[inj_x][inj_y] === "E")
          return exit_board[cur_x][cur_y] + 1
        if (
          exit_board[inj_x][inj_y] === "O" ||
          exit_board[inj_x][inj_y] === "S"
        ) {
          exit_board[inj_x][inj_y] = exit_board[cur_x][cur_y] + 1
          stack.push([inj_x, inj_y])
        }
      }
    }
    return -1
  }
}
