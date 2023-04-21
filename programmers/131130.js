// https://school.programmers.co.kr/learn/courses/30/lessons/131130

function solution(cards) {
  const length = cards.length
  const check = Array.from({ length }, () => false)
  const answer = []

  for (let i = 0; i < length; i++) {
    if (check[i]) continue
    let cur = i
    let count = 0

    while (!check[cur]) {
      check[cur] = true
      cur = cards[cur] - 1
      count += 1
    }
    if (count !== 0) answer.push(count)
  }
  answer.sort((a, b) => b - a)

  return answer[0] * answer[1] || 0
}
