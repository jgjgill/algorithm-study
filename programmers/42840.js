// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const first_check = [1, 2, 3, 4, 5]
  const second_check = [2, 1, 2, 3, 2, 4, 2, 5]
  const third_check = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let first_count = 0
  let second_count = 0
  let third_count = 0

  answers.forEach((answer, index) => {
    const first_index = index % first_check.length
    const second_index = index % second_check.length
    const third_index = index % third_check.length

    if (first_check[first_index] === answer) first_count += 1
    if (second_check[second_index] === answer) second_count += 1
    if (third_check[third_index] === answer) third_count += 1
  })

  const count_arr = [first_count, second_count, third_count]
  const max_number = Math.max(...count_arr)
  const answer = []

  count_arr.forEach((item, index) => {
    if (item === max_number) answer.push(index + 1)
  })

  return answer
}
