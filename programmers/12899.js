// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = ''
  let check

  while (n !== 0) {
    if (n % 3 === 0) check = 4
    if (n % 3 === 1) check = 1
    if (n % 3 === 2) check = 2

    n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3)
    answer = check + answer
  }

  return answer
}
