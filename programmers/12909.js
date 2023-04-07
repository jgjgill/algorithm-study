// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let left_check = 0

  for (let i = 0; i < s.length; i++) {
    if (left_check === 0 && s[i] === ")") return false
    if (s[i] === ")") left_check -= 1
    if (s[i] === "(") left_check += 1
  }

  if (left_check !== 0) return false
  else return true
}
