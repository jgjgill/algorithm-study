// https://school.programmers.co.kr/learn/courses/30/lessons/140107

function solution(k, d) {
  let answer = 0
  let start = 0
  let end = k * Math.floor(d / k)

  while (start <= k * Math.floor(d / k)) {
    if (start ** 2 + end ** 2 <= d ** 2) {
      answer += Math.floor(end / k) + 1
      start += k
    } else {
      end -= k
    }
  }

  return answer
}
