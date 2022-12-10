// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  return dp(n);
  
  function dp(n) {
      const dp = [0, 1]
      
      for (let i = 2; i <= n; i++) {
          dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567
      }
      
      return dp[n] 
  }
}
