// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  const stack = []
  let answer = 0
  let index = 0

  while (index < ingredient.length) {
    stack.push(ingredient[index++])

    if (
      stack.at(-4) === 1 &&
      stack.at(-3) === 2 &&
      stack.at(-2) === 3 &&
      stack.at(-1) === 1
    ) {
      answer++
      stack.splice(-4)
    }
  }

  return answer
}

function solution(ingredient) {
  const stack = []
  let answer = 0

  for (const cur of ingredient) {
    stack.push(cur)

    while (isBurger()) {
      stack.pop()
      stack.pop()
      stack.pop()
      stack.pop()
      answer += 1
    }
  }

  return answer

  function isBurger() {
    return (
      stack.at(-1) === 1 &&
      stack.at(-2) === 3 &&
      stack.at(-3) === 2 &&
      stack.at(-4) === 1
    )
  }
}
