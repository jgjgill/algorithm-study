// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  files = files.map((item) => {
    const head = item.match(/\D+/g)[0].toLowerCase()
    const number = Number(item.match(/\d+/g)[0].replace(/(^0+)/g, ''))
    return [head, number, item]
  })

  const answer = files.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      if (a[0] < b[0]) return -1
      else if (a[0] > b[0]) return 1
      else return 0
    }
  })

  return answer.map((item) => item[2])
}
