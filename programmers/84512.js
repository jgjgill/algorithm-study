// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"]
  let index = 0

  function dfs(now) {
    index++

    if (now === word) return true
    if (now.length === 5) return false

    for (const alphabet of alphabets) {
      if (dfs(now + alphabet)) return index
    }
  }

  for (const alphabet of alphabets) {
    if (dfs(alphabet)) return index
  }
}

function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"]
  let index = 0

  for (const alphabet of alphabets) {
    if (dfs(alphabet)) return index
  }

  function dfs(check) {
    index += 1
    if (check === word) return true
    if (check.length === 5) return false

    for (const alphabet of alphabets) {
      if (dfs(check + alphabet)) return index
    }
  }
}
