// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0

  let first
  let firstCount = 0
  let restCount = 0

  s.split('').forEach((item) => {
    if (first === undefined) {
      first = item
      firstCount = 1
    } else {
      if (item === first) firstCount += 1
      else restCount += 1
    }

    if (firstCount === restCount) {
      answer += 1
      resetInfo()
    }
  })

  function resetInfo() {
    firstCount = 0
    restCount = 0
    first = undefined
  }

  return first === undefined ? answer : answer + 1
}
