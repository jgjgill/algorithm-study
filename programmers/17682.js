// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const reg = /(\d{1,2})(S|D|T)(\*|#)?/g
  const answer = []
  const check = []

  for (let i = 0; i < 3; i++) check.push(splitFunc())

  check.forEach((dart, index) => {
    const score = Number(dart.match(/(\d{1,2})/)[0])
    const chance = dart.match(/S|D|T/)[0]
    const prize = dart.match(/\*|#/)

    powFunc(index, score, chance)
    prizeFunc(index, prize)
  })

  return answer.reduce((acc, cur) => acc + cur, 0)

  function splitFunc() {
    const dart = dartResult.match(reg)[0]
    dartResult = dartResult.replace(dart, '')
    return dart
  }

  function powFunc(index, score, chance) {
    let number
    if (chance === 'S') number = 1
    if (chance === 'D') number = 2
    if (chance === 'T') number = 3

    answer[index] = Math.pow(score, number)
  }

  function prizeFunc(index, prize) {
    if (prize === null) return
    if (prize[0] === '#') answer[index] *= -1
    if (prize[0] === '*') {
      if (index !== 0) answer[index - 1] *= 2
      answer[index] *= 2
    }
  }
}
