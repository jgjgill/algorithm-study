// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  board = board.map((item) => item.split(''))
  
  const dirs = [[0, 0], [0,1], [1, 0], [1,1]]
      
  while (checkBoard()) {
      changeBoard()
  }
      
  function checkBoard() {
      const change = []
      
      for (let i = 0; i < m - 1; i++) {
          for (let t = 0; t < n - 1; t++) {
              if (!board[i][t]) continue
              
              const set = new Set(dirs.map(([x, y]) => board[x + i][y + t]))
              if (set.size === 1) dirs.forEach(([x, y]) => change.push([[x + i], [y + t]]))
          }
      }
      
      change.forEach(([x, y]) => board[x][y] = 0)
          
      return change.length
  }
  
  function changeBoard() {
      for (let i = 0; i < n; i++) {
          const remain = Array.from({length: m}, (_, index) => board[index][i]).filter(Boolean)
          const result = [...Array(m - remain.length).fill(0), ...remain]
      
          result.forEach((item, index) => board[index][i] = item)
      }
  }
  
  return board.flat().filter((item) => !item).length
}
