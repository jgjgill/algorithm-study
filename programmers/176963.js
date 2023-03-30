// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  const name_length = name.length
  const check = {}
  const answer = []

  for (let i = 0; i < name_length; i++) {
    check[name[i]] = yearning[i]
  }

  for (const select_photo of photo) {
    let count = 0

    for (const people of select_photo) {
      if (!check[people]) continue

      count += check[people]
    }
    answer.push(count)
  }

  return answer
}
