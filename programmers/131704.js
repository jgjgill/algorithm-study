// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
  const stack = []
  let answer = 0
  let index = 0

  for (let i = 1; i <= order.length; i++) {
    if (order[index] < i && order[index] > stack.at(-1)) return answer

    let check = false

    while (order[index] === i || order[index] === stack.at(-1)) {
      if (index === order.length) return answer
      if (order[index] === i) check = true
      if (order[index] === stack.at(-1)) stack.pop()

      answer += 1
      index += 1
    }

    if (!check) stack.push(i)
  }

  return answer
}
