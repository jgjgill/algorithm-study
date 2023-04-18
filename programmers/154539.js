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

function solution(numbers) {
  const stack = []
  const answer = []

  numbers.forEach((number, index) => {
    if (stack.length === 0) stack.push([number, index])
    else {
      while (stack.length !== 0 && stack.at(-1)[0] < number) {
        const cur = stack.pop()

        answer.push([number, cur[1]])
      }
      stack.push([number, index])
    }
  })

  while (stack.length !== 0) {
    const cur = stack.pop()
    answer.push([-1, cur[1]])
  }

  return answer.sort((a, b) => a[1] - b[1]).map((item) => item[0])
}
