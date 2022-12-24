// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0

  for (let i = 0; i < t.length; i++) {
    if (i + p.length > t.length) continue
    if (t.slice(i, i + p.length) <= p) answer += 1
  }

  return answer
}
