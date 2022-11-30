// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const check = {}
  let answer = 0

  want.forEach((item, index) => {
    check[item] = number[index]
  })

  for (let i = 0; i < 9; i++) {
    if (check[discount[i]] === undefined) continue

    check[discount[i]]--
  }

  outer: for (let i = -1; i <= discount.length - 10; i++) {
    if (check[discount[i]] !== undefined) check[discount[i]]++
    if (check[discount[i + 10]] !== undefined) check[discount[i + 10]]--

    for (const key in check) {
      if (check[key]) continue outer
    }

    answer++
  }

  return answer
}
