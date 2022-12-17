// https://school.programmers.co.kr/learn/courses/30/lessons/12936

function solution(n, k) {
  const factorial = dp()
  const check = Array.from({ length: n }, (_, i) => i + 1)
  const answer = []

  while (n !== 0) {
    const index = Math.floor((k - 1) / factorial[n - 1])
    answer.push(check[index])
    check.splice(index, 1)
    k = k % factorial[n - 1] || factorial[n - 1]
    n -= 1
  }

  return answer

  function dp() {
    const dp = [1]

    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i - 1] * i
    }

    return dp
  }
}
