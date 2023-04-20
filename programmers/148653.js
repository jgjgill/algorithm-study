// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  let check = Infinity
  calcStorey(storey, 0)

  return check

  function calcStorey(number, count) {
    if (count >= check) return
    if (number === 0) {
      check = Math.min(check, count)
      return
    }

    const one_number = number % 10
    calcStorey(Math.floor(number / 10), count + one_number)
    calcStorey(Math.ceil(number / 10), count + 10 - one_number)
  }
}
