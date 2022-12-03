// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const check = {}
  let count = 0

  for (const item of tangerine) {
    check[item] = check[item] === undefined ? 1 : check[item] + 1
  }

  return (
    Object.values(check)
      .sort((a, b) => b - a)
      .findIndex((item) => {
        count += item
        if (k <= count) return true
      }) + 1
  )
}
