// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const length = board.length
  const stack = []
  let count = 0

  for (let move of moves) {
    move -= 1
    for (let i = 0; i < length; i++) {
      if (board[i][move] !== 0) {
        if (stack.at(-1) === board[i][move]) {
          stack.pop()
          count += 2
        } else stack.push(board[i][move])

        board[i][move] = 0
        break
      }
    }
  }

  return count
}
