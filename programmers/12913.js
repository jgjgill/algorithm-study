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

function solution(land) {
  let dp = Array.from({length: land.length}, () => [])
  dp[0] =land[0]
  
  for (let i = 1; i < land.length; i++) {
      dp[i][0] = land[i][0] + Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3])
      dp[i][1] = land[i][1] + Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3])
      dp[i][2] = land[i][2] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3])
      dp[i][3] = land[i][3] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2])
  }
  
  return Math.max(...dp.at(-1))
}
