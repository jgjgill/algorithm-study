// https://www.acmicpc.net/problem/11727

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  const dp = [1, 3]

  for (let i = 2; i<= 1000; i++) {
    dp[i] = (2 * dp[i - 2] + dp[i - 1]) % 10007
  }

  return dp[N - 1]
}

console.log(solution());
