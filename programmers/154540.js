// https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const answer = []
  const check = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  )

  for (let i = 0; i < maps.length; i++) {
    for (let t = 0; t < maps[0].length; t++) {
      if (maps[i][t] === "X") continue
      if (check[i][t] === true) continue

      check[i][t] = true
      const count = dfs(i, t, Number(maps[i][t]))

      answer.push(count)
    }
  }

  function dfs(x, y, count) {
    const stack = [[x, y]]

    while (stack.length !== 0) {
      const current = stack.pop()

      for (const direction of directions) {
        const injectX = direction[0] + current[0]
        const injectY = direction[1] + current[1]

        if (injectX >= maps.length || injectY >= maps[0].length) continue
        if (injectX < 0 || injectY < 0) continue
        if (check[injectX][injectY] === true) continue
        if (maps[injectX][injectY] === "X") continue

        count += Number(maps[injectX][injectY])
        check[injectX][injectY] = true

        stack.push([injectX, injectY])
      }
    }

    return count
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
}
