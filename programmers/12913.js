// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  function dp() {
    const dp = []
    dp[0] = land[0]

    for (let i = 1; i < land.length; i++) {
      dp[i] = []
      for (let t = 0; t < 4; t++) {
        const max = Math.max(
          ...dp[i - 1].slice(0, t),
          ...dp[i - 1].slice(t + 1, 4)
        )
        dp[i][t] = land[i][t] + max
      }
    }

    return Math.max(...dp.at(-1))
  }

  const answer = dp()

  return answer
}
