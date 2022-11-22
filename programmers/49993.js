// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  const check = skill.split('').reduce((acc, cur, i) => {
    acc[cur] = i

    return acc
  }, {})

  const answer = skill_trees.filter((item) => {
    let order = 0

    for (const char of item) {
      if (check[char] === undefined) continue
      if (order !== check[char]) return false

      order++
    }

    return true
  })

  return answer.length
}
