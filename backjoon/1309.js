// https://www.acmicpc.net/problem/1309

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);

function dp() {
  const dp = new Array(N + 1).fill().map(() => []);

  dp[0][0] = 1;
  dp[0][1] = 1;
  dp[0][2] = 1;

  for (let i = 1; i <= N; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
  }

  return dp[N][0];
}

function solution() {
  const answer = dp();

  return answer;
}

console.log(solution());
