// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const check = {}

  for (const people of participant) {
    if (check[people] === undefined) check[people] = 1
    else check[people] += 1
  }

  for (const people of completion) {
    check[people] -= 1
  }

  for (const people in check) {
    if (check[people] === 1) return people
  }
}
