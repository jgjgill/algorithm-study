// https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
  let answer = 0

  A.sort((a, b) => b - a)
  B.sort((a, b) => a - b)

  for (const a of A) {
    if (a >= B.at(-1)) continue

    answer += 1
    B.pop()
  }

  return answer
}
