// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const answer = []
  let count = 0
  let index = -1

  outer: while (answer.length !== number.length - k) {
    index += 1

    if (number[index] === '9') {
      answer.push(number[index])
      continue outer
    }

    for (let i = index; i <= index + k - count; i++) {
      if (number[index] < number[i]) {
        count += 1
        continue outer
      }
    }

    answer.push(number[index])
  }

  return answer.join('')
}
