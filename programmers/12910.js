// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const answer = arr
    .sort((a, b) => a - b)
    .filter((item) => item % divisor === 0)

  return answer.length === 0 ? [-1] : answer
}
