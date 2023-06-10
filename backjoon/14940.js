// https://www.acmicpc.net/problem/14940

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [n, m] = input[0].split(" ").map(Number);
  const answer = Array.from({ length: n }, () => new Array(m).fill(-1));
  const board = Array.from({ length: n }, () => []);
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 1; i <= n; i++) {
    const temp = input[i].split(" ").map(Number);
    board[i - 1] = temp;
  }

  outer: for (let i = 0; i < n; i++) {
    for (let t = 0; t < m; t++) {
      if (board[i][t] === 2) {
        bfs(i, t);
      }
      if (board[i][t] === 0) {
        answer[i][t] = 0;
      }
    }
  }

  function bfs(x, y) {
    const queue = [[x, y]];
    answer[x][y] = 0;
    let index = 0;

    while (index < queue.length) {
      const current = queue[index];
      index += 1;

      for (const dir of dirs) {
        const dx = dir[0] + current[0];
        const dy = dir[1] + current[1];

        if (dx < 0 || dy < 0) continue;
        if (dx >= n || dy >= m) continue;
        if (answer[dx][dy] !== -1) continue;
        if (board[dx][dy] === 1) {
          answer[dx][dy] = answer[current[0]][current[1]] + 1;
          queue.push([dx, dy]);
        }
      }
    }
  }

  return answer.reduce((acc, cur) => acc + cur.join(" ") + "\n", "");
}

console.log(solution());
