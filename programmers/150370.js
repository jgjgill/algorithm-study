// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const check = {}

  today = today.split('.').map(Number)
  today = today[0] * 28 * 12 + today[1] * 28 + today[2]

  for (const term of terms) {
    const [kind, month] = term.split(' ')
    check[kind] = Number(month)
  }

  return privacies
    .map((privacy, index) => {
      const [temp, kind] = privacy.split(' ')
      const [year, month, day] = temp.split('.').map(Number)
      return [year * 28 * 12 + (month + check[kind]) * 28 + day, index + 1]
    })
    .filter((privacy) => today >= privacy[0])
    .map((privacy) => privacy[1])
}
