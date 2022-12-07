// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  return numbers
    .map(String)
    .sort((a, b) => {
      if (a + b < b + a) return 1
      if (a + b > b + a) return -1
      if (a + b === b + a) return 0
    })
    .join('')
    .replace(/^0*$/, '0')
}
