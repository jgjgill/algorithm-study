// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  const dp = Array.from({ length: board.length }, () => [])
  let answer = 0

  for (let i = 0; i < board.length; i++) {
    for (let t = 0; t < board[0].length; t++) {
      dp[i][t] = board[i][t]
      answer = Math.max(answer, board[i][t])
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let t = 1; t < board[0].length; t++) {
      if (board[i][t] === 1) {
        dp[i][t] = Math.min(dp[i - 1][t], dp[i][t - 1], dp[i - 1][t - 1]) + 1
        answer = Math.max(answer, dp[i][t])
      }
    }
  }

  return answer ** 2
}
