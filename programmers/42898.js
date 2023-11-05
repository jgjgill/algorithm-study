// https://school.programmers.co.kr/learn/courses/30/lessons/42898

function solution(m, n, puddles) {
  const board = Array.from({ length: n }, () => new Array(m).fill(0));

  for (const [y, x] of puddles) {
    board[x - 1][y - 1] = -1;
  }

  for (let i = 1; i < n; i++) {
    board[i][0] = board[i][0] === -1 || board[i - 1][0] === -1 ? -1 : 1;
  }

  for (let i = 1; i < m; i++) {
    board[0][i] = board[0][i] === -1 || board[0][i - 1] === -1 ? -1 : 1;
  }

  for (let i = 1; i < n; i++) {
    for (let t = 1; t < m; t++) {
      if (board[i][t] !== -1) {
        const left = board[i][t - 1] === -1 ? 0 : board[i][t - 1];
        const up = board[i - 1][t] === -1 ? 0 : board[i - 1][t];

        board[i][t] = left + up === 0 ? -1 : (left + up) % 1_000_000_007;
      }
    }
  }

  return board[n - 1][m - 1] === -1 ? 0 : board[n - 1][m - 1];
}
