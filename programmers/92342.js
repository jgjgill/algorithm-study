// https://school.programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  const temp = Array.from({ length: 11 }, () => 0)
  let check_score = 0
  let answer = [-1]

  dfs(n, temp, 0)
  return answer

  function calcScore(result) {
    return info.reduce((acc, cur, idx) => {
      if (result[idx] > cur) return acc + 10 - idx
      else if (cur === 0 && result[idx] === 0) return acc
      else return acc - 10 + idx
    }, 0)
  }

  function dfs(n, result, index) {
    if (n === 0) {
      const score = calcScore(result)
      if (check_score < score) {
        check_score = score
        answer = result
      }
      return
    }
    for (let i = index; i < 11; i++) {
      const chage_i = 10 - i
      const copy = [...result]

      if (n > info[chage_i]) {
        copy[chage_i] = info[chage_i] + 1
        dfs(n - copy[chage_i], copy, i + 1)
      } else {
        copy[10] += n
        dfs(0, copy, i + 1)
      }
    }

    const copy = [...result]
    copy[10] += n
    dfs(0, copy, -1)
  }
}
