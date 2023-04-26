// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  const visit = Array.from({ length: words.length }, () => 0)
  const answer = bfs(begin)

  return answer

  function bfs(now_word) {
    const queue = [[now_word, -1]]
    let index = 0

    while (index < queue.length) {
      const [cur, prev] = queue[index]
      index += 1

      for (let i = 0; i < words.length; i++) {
        if (!isDiffAlphabetOne(cur, words[i])) continue
        if (visit[i] !== 0) continue
        if (words[i] === target) return (visit[prev] ?? 0) + 1

        visit[i] = (visit[prev] ?? 0) + 1
        queue.push([words[i], i])
      }
    }

    return 0
  }

  function isDiffAlphabetOne(a_word, b_word) {
    let check = 0

    for (let i = 0; i < a_word.length; i++) {
      if (a_word[i] !== b_word[i]) check += 1
      if (check > 1) break
    }

    return check === 1 ? true : false
  }
}
