// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let answer = 0
  let check = 0

  citations.sort((a, b) => a - b)

  while (check < citations.length) {
    if (answer < citations[check] && answer < citations.length - check) {
      answer++
    } else {
      check++
    }
  }

  return answer
}

function solution(citations) {
  let h = 0
  citations.sort((a, b) => a - b)

  for (let i = 0; i < citations.length; i++) {
    while (h < citations[i]) {
      if (citations.length - i <= h) return h
      h += 1
    }
  }

  return h
}
