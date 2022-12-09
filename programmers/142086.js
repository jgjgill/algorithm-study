// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const check = {}

  return s.split('').map((item, index) => {
    const nowIndex = check[item] === undefined ? -1 : index - check[item]
    check[item] = index
    return nowIndex
  })
}
