const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [n, m] = input[0].split(" ").map(Number);
  const board = Array.from({ length: n }, () => []);
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let answer = 0;

  for (let i = 0; i < n; i++) {
    const temp = input[i + 1].split("");

    for (let t = 0; t < m; t++) {
      board[i][t] = temp[t];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let t = 0; t < m; t++) {
      if (board[i][t] === "W") continue;

      const count = bfs(i, t);
      answer = Math.max(answer, count);
    }
  }

  function bfs(x, y) {
    const queue = [[x, y, 0]];
    const check = Array.from({ length: n }, (_, i) => [...board[i]]);

    let index = 0;
    check[x][y] = "W";

    while (queue.length > index) {
      const [x, y, count] = queue[index];

      index += 1;

      for (const [dx, dy] of dirs) {
        const nx = dx + x;
        const ny = dy + y;

        if (nx > n - 1 || ny > m - 1) continue;
        if (nx < 0 || ny < 0) continue;
        if (check[nx][ny] === "L") {
          queue.push([nx, ny, count + 1]);
          check[nx][ny] = "W";
        }
      }
    }

    return queue.at(-1)[2];
  }

  return answer;
}

console.log(solution());
