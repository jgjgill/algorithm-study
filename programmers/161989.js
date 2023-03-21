// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let count = 0
  let index

  while (section.length !== 0) {
    const current = section.shift()
    if (index >= current) continue

    index = current
    index += m - 1
    count += 1
  }

  return count
}
