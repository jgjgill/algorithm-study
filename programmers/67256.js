// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  const check = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ]
  let result = ""
  let left = [3, 0]
  let right = [3, 2]

  for (const number of numbers) {
    const target = check[number]
    if (number === 1 || number === 4 || number === 7) changeLeft(target)
    else if (number === 3 || number === 6 || number === 9) changeRight(target)
    else {
      const left_check = calcDistance(target, left)
      const right_check = calcDistance(target, right)

      if (left_check < right_check) changeLeft(target)
      else if (left_check > right_check) changeRight(target)
      else hand === "left" ? changeLeft(target) : changeRight(target)
    }
  }

  return result

  function calcDistance(target, current) {
    return Math.abs(target[0] - current[0]) + Math.abs(target[1] - current[1])
  }

  function changeLeft(new_left) {
    left = new_left
    result += "L"
  }

  function changeRight(new_right) {
    right = new_right
    result += "R"
  }
}
