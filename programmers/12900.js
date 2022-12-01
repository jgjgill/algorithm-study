// https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  return dp()

  function dp() {
    const dp = [1, 2]

    for (let i = 2; i < n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }

    return dp.at(-1)
  }
}
