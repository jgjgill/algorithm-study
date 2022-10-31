// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function dp(n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n] % 1234567;
}

function solution(n) {
  const answer = dp(n);

  return answer;
}
