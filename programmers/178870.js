// https://school.programmers.co.kr/learn/courses/30/lessons/178870

function solution(sequence, k) {
  let answer
  let right = 0
  let sum = sequence[0]
  let check = Infinity

  for (let left = 0; left < sequence.length; left++) {
    if (left > right) break

    while (sum < k) {
      right += 1
      sum += sequence[right]
    }

    if (sum === k && right - left < check) {
      answer = [left, right]
      check = right - left
    }

    sum -= sequence[left]
  }

  return answer
}
