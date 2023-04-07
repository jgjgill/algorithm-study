// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const index_key_check = {}
  const name_key_check = {}
  const answer = []

  players.forEach((player, index) => {
    index_key_check[index] = player
    name_key_check[player] = index
  })

  callings.forEach((calling) => {
    name_key_check[calling] -= 1
    const temp_index = name_key_check[calling]
    const temp_name = index_key_check[temp_index]
    name_key_check[temp_name] += 1

    index_key_check[temp_index] = calling
    index_key_check[temp_index + 1] = temp_name
  })

  for (const key in index_key_check) {
    answer.push(index_key_check[key])
  }

  return answer
}
