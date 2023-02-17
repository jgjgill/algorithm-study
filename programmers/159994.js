// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let index1 = 0
  let index2 = 0
  let check = 0

  while (check < goal.length) {
    if (goal[check] === cards1[index1]) {
      check += 1
      index1 += 1
      continue
    }
    if (goal[check] === cards2[index2]) {
      check += 1
      index2 += 1
      continue
    }

    return "No"
  }

  return "Yes"
}
