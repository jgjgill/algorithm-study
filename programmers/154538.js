// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  if (x === y) return 0

  const dp = {}
  let check = [x]
  dp[x] = 0

  while (check.length !== 0) {
    const newCheck = []
    for (const now of check) {
      for (const temp of [now + n, now * 2, now * 3]) {
        if (temp > y || dp[temp]) continue
        if (temp === y) return dp[now] + 1

        dp[temp] = dp[now] + 1
        newCheck.push(temp)
      }
    }

    check = newCheck
  }

  return -1
}
