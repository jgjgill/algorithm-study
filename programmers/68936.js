// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  const answer = [0, 0]

  recur(0, 0, arr.length)

  function recur(x, y, length) {
    for (let i = 0; i < length; i++) {
      for (let t = 0; t < length; t++) {
        if (arr[x + i][y + t] !== arr[x][y]) {
          recur(x, y, length / 2)
          recur(x, y + length / 2, length / 2)
          recur(x + length / 2, y, length / 2)
          recur(x + length / 2, y + length / 2, length / 2)
          return
        }
      }
    }

    answer[arr[x][y]] += 1
  }

  return answer
}
