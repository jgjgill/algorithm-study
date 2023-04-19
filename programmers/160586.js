// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  const answer = []
  const check = {}

  for (const keys of keymap) {
    keys.split("").forEach((key, index) => {
      if (check[key] > index + 1) check[key] = index + 1
      if (check[key] === undefined) check[key] = index + 1
    })
  }

  for (const target of targets) {
    let count = 0
    let temp = false

    for (const item of target) {
      if (!check[item]) {
        temp = true
        break
      }

      count += check[item]
    }

    if (temp) answer.push(-1)
    else answer.push(count)
  }

  return answer
}

function solution(keymap, targets) {
  const check = {}
  const answer = []

  for (let key_arr of keymap) {
    key_arr.split("").forEach((key, index) => {
      if (!(key in check)) check[key] = index + 1
      else check[key] = Math.min(check[key], index + 1)
    })
  }

  for (const target of targets) {
    let count = 0

    for (const cur_target of target) {
      if (!check[cur_target]) {
        count = -1
        break
      }

      count += check[cur_target]
    }

    answer.push(count)
  }

  return answer
}
