// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  const check = {}
  const answer = []

  for (const wire of wires) {
    if (!(wire[0] in check)) check[wire[0]] = [wire[1]]
    else check[wire[0]].push(wire[1])

    if (!(wire[1] in check)) check[wire[1]] = [wire[0]]
    else check[wire[1]].push(wire[0])
  }

  for (const wire of wires) {
    const stack = [...check[wire[0]]]
    const visit = {}
    let count = 1
    visit[wire[0]] = true
    visit[wire[1]] = true

    while (stack.length !== 0) {
      const cur = stack.pop()

      if (!visit[cur]) {
        visit[cur] = true
        count += 1
        stack.push(...check[cur])
      }
    }

    answer.push(Math.abs(count * 2 - n))
  }

  return Math.min(...answer)
}
