// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const check = []
  const answer = score.map((item, index) => {
    check.push(item)
    check.sort((a, b) => b - a)

    if (index > k - 1) check.pop()

    return check.at(-1)
  })

  return answer
}
