// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const stack = []
  let index = 0

  while (true) {
    let check = true

    for (let i = index + 1; i < priorities.length; i++) {
      if (priorities[index] < priorities[i]) {
        if (index === location) location = priorities.length

        priorities.push(priorities[index])
        check = false
        break
      }
    }

    if (check) stack.push(priorities[index])
    if (index === location) return stack.length

    index++
  }
}

function solution(priorities, location) {
  const stack = []
  const length = priorities.length
  priorities = priorities.map((priority, index) => [priority, index])

  while (stack.length !== length) {
    stack.push(priorities.shift())

    for (let i = 0; i < priorities.length; i++) {
      if (stack.at(-1)[0] < priorities[i][0]) {
        priorities.push(stack.pop())
        break
      }
    }
  }

  return stack.findIndex((item) => item[1] === location) + 1
}
