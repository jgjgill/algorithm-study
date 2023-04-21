// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const length = survey.length
  const score_check = [0, 3, 2, 1, 0, 1, 2, 3]
  const survey_score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
  let answer = ""

  for (let i = 0; i < length; i++) {
    const choice = choices[i]
    const category = survey[i]
    if (1 <= choice && 3 >= choice)
      survey_score[category[0]] += score_check[choice]
    if (5 <= choice && 7 >= choice)
      survey_score[category[1]] += score_check[choice]
  }

  const score_arr = Object.entries(survey_score)

  for (let i = 0; i < 8; i += 2) {
    answer +=
      score_arr[i][1] >= score_arr[i + 1][1]
        ? score_arr[i][0]
        : score_arr[i + 1][0]
  }

  return answer
}
