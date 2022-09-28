// https://www.acmicpc.net/problem/11660

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const answer = [];

function createDp() {
  const dp = new Array(N + 1).fill().map(() => new Array(N + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const number = input[i].split(" ");

    for (let t = 1; t <= N; t++) {
      dp[i][t] =
        dp[i - 1][t] + dp[i][t - 1] - dp[i - 1][t - 1] + Number(number[t - 1]);
    }
  }

  return dp;
}

function solution() {
  const dp = createDp();

  for (let i = 1; i <= M; i++) {
    const [x1, y1, x2, y2] = input[i + N].split(" ").map(Number);

    const sum =
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];

    answer.push(sum);
  }

  console.log(answer.join("\n"));
}

solution();
