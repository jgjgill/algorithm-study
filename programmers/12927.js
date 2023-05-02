// https://school.programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  works = works.sort((a, b) => b - a)

  while (n > 0) {
    const max = works[0]
    if (max === 0) break

    for (let i = 0; i < works.length; i++) {
      if (n === 0) break
      if (works[i] < max) break
      works[i] -= 1
      n -= 1
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0)
}
