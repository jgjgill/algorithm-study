// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let max = -Infinity
  let min = -Infinity
  
  for (const [w, h] of sizes) {
      let now_max = Math.max(w, h)
      let now_min = Math.min(w, h)
      max = Math.max(max, now_max)
      min = Math.max(min, now_min)
  }

  return max * min
}