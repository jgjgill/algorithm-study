// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  const check = s
    .toUpperCase()
    .split("")
    .reduce((acc, cur) => {
      if (cur === "P") return acc + 1
      if (cur === "Y") return acc - 1
      return acc
    }, 0)

  return check === 0 ? true : false
}
