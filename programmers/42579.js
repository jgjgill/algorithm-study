// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const count_check = {}
  const result_check = {}
  const length = genres.length
  const temp = []
  const answer = []

  for (let i = 0; i < length; i++) {
    const genre = genres[i]
    const play = plays[i]

    if (count_check[genre] === undefined) {
      count_check[genre] = play
      result_check[genre] = 0
    } else {
      count_check[genre] += play
    }
  }

  for (let i = 0; i < length; i++) {
    const genre = genres[i]
    const play = plays[i]

    temp.push([count_check[genre], play, i, genre])
  }

  temp.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0]
    else if (a[1] !== b[1]) return b[1] - a[1]
    return a[2] - b[2]
  })

  temp.forEach((item) => {
    if (result_check[item[3]] !== 2) {
      answer.push(item[2])
      result_check[item[3]] += 1
    }
  })

  return answer
}
