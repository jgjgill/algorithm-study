// https://school.programmers.co.kr/learn/courses/30/lessons/12952

function solution(n) {
  const cols = Array.from({ length: n }, () => -1);
  let answer = 0;

  dfs(0);

  return answer;

  function dfs(row) {
    if (row === n) {
      answer += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      let possible = true;
      for (let t = 0; t < row; t++) {
        if (validate(row, i, t, cols[t])) {
          possible = false;
          break;
        }
      }

      if (possible) {
        cols[row] = i;
        dfs(row + 1);
        cols[row] = -1;
      }
    }
  }

  function validate(row1, col1, row2, col2) {
    if (col1 === col2) return true;
    if (row1 + col1 === row2 + col2) return true;
    if (row1 - col1 === row2 - col2) return true;
    return false;
  }
}

function solution(n) {
  const check = Array.from({ length: n }, () => -1);
  let answer = 0;

  dfs(0);

  return answer;

  function dfs(row) {
    if (row === n) {
      answer += 1;
      return;
    }

    for (let col = 0; col < n; col++) {
      check[row] = col;
      if (validate(row)) {
        dfs(row + 1);
      }
    }
  }

  function validate(row) {
    for (let i = 0; i < row; i++) {
      if (check[i] === check[row]) return false;
      if (Math.abs(check[i] - check[row]) === row - i) return false;
    }

    return true;
  }
}
