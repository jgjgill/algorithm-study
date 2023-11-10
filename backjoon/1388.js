const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = Array.from({ length: N }, () => []);
  let count = 0;

  for (let i = 0; i < N; i++) {
    const temp = input[i + 1].split("");
    for (let t = 0; t < M; t++) {
      board[i][t] = temp[t];
    }
  }

  for (let i = 0; i < N; i++) {
    for (let t = 0; t < M; t++) {
      if (board[i][t] === "x") {
        continue;
      }

      count += 1;
      dfs(i, t, board[i][t]);
    }
  }

  return count;

  function dfs(x, y, wood) {
    board[x][y] = "x";

    if (wood === "-" && y + 1 < M && board[x][y + 1] === "-") {
      dfs(x, y + 1, wood);
    }

    if (wood === "|" && x + 1 < N && board[x + 1][y] === "|") {
      dfs(x + 1, y, wood);
    }
  }
}

console.log(solution());
