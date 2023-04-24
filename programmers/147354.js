// https://school.programmers.co.kr/learn/courses/30/lessons/147354

function solution(data, col, row_begin, row_end) {
  const answer = []

  data.sort((a, b) => {
    if (a[col - 1] !== b[col - 1]) return a[col - 1] - b[col - 1]
    else return b[0] - a[0]
  })

  for (let i = row_begin - 1; i < row_end; i++) {
    const mod_sum = data[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0)
    answer.push(mod_sum)
  }
  return answer.reduce((acc, cur) => acc ^ cur)
}
