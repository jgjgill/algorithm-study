// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = []
  const days = []

  for (let i = 0; i < progresses.length; i++) {
    const rest = 100 - progresses[i]
    const day = Math.floor(rest / speeds[i]) + (rest % speeds[i] ? 1 : 0)

    days.push(day)
  }

  let max = days[0]
  let index = 1
  let check = 1

  while (index < days.length) {
    if (max < days[index]) {
      answer.push(check)

      max = days[index]
      check = 1
    } else {
      check++
    }

    index++
  }

  answer.push(check)

  return answer
}

function solution(progresses, speeds) {
  const stack = []
  const answer = []
  const length = progresses.length
  let count

  for (let i = 0; i < length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i])

    if (stack.length === 0) {
      stack.push(day)
      count = 1
      continue
    }

    if (stack.at(-1) < day) {
      stack.push(day)
      answer.push(count)
      count = 1
    } else {
      count += 1
    }
  }

  answer.push(count)

  return answer
}
