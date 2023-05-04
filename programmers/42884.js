// https://school.programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  let answer = 0
  let check = -Infinity
  routes.sort((a, b) => a[1] - b[1])

  for (const route of routes) {
    if (check >= route[0]) continue

    answer += 1
    check = route[1]
  }

  return answer
}
