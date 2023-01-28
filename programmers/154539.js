// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1)
  const stack = []

  for (let i = 0; i < numbers.length; i++) {
    while (numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i]
    }

    stack.push(i)
  }

  return answer
}
