// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  const check = {}

  let answer = 0
  let x = 0
  let y = 0

  for (const dir of dirs) {
    let checkX = x
    let checkY = y

    if (dir === 'U' && y < 5) {
      checkY += 0.5
      y++
    }
    if (dir === 'L' && x > -5) {
      checkX -= 0.5
      x--
    }
    if (dir === 'R' && x < 5) {
      checkX += 0.5
      x++
    }
    if (dir === 'D' && y > -5) {
      checkY -= 0.5
      y--
    }

    if (check[checkX.toString() + checkY.toString()]) continue
    if (x === checkX && y === checkY) continue

    check[checkX.toString() + checkY.toString()] = true
    answer++
  }

  return answer
}
