// https://school.programmers.co.kr/learn/courses/30/lessons/72412

function solution(infos, queries) {
  const answer = []
  const check = {}

  for (const lang of ['java', 'python', 'cpp', '-'])
    for (const job of ['backend', 'frontend', '-'])
      for (const career of ['junior', 'senior', '-'])
        for (const food of ['chicken', 'pizza', '-'])
          check[lang + job + career + food] = []

  for (const info of infos) {
    const temp = info.split(' ')
    for (const lang of [temp[0], '-'])
      for (const job of [temp[1], '-'])
        for (const career of [temp[2], '-'])
          for (const food of [temp[3], '-'])
            check[lang + job + career + food].push(Number(temp[4]))
  }

  for (const key in check) check[key].sort((a, b) => a - b)

  for (const query of queries) {
    const temp = query.replaceAll(' and ', '').split(' ')
    const query_key = temp[0]
    const query_score = Number(temp[1])
    const select_check = check[query_key]

    let min = 0
    let max = select_check.length
    let mid

    while (min < max) {
      mid = Math.floor((min + max) / 2)

      if (select_check[mid] < query_score) min = mid + 1
      else max = mid
    }
    answer.push(select_check.length - min)
  }

  return answer
}
