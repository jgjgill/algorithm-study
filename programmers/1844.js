// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  const xLength = maps.length
  const yLength = maps[0].length

  return dfs()

  function dfs() {
    const queue = []
    let index = 0

    queue.push([0, 0, 1])
    maps[0][0] = 0

    while (index < queue.length) {
      const [nowX, nowY, nowPoint] = queue[index]
      index++

      if (nowX === xLength - 1 && nowY === yLength - 1) return nowPoint

      for (const dir of dirs) {
        const [dx, dy] = dir
        const injectX = dx + nowX
        const injectY = dy + nowY

        if (injectX > xLength - 1 || injectX < 0) continue
        if (injectY > yLength - 1 || injectY < 0) continue
        if (!maps[injectX][injectY]) continue

        maps[injectX][injectY] = 0
        queue.push([injectX, injectY, nowPoint + 1])
      }
    }

    return -1
  }
}
