// https://school.programmers.co.kr/learn/courses/30/lessons/172927

function solution(picks, minerals) {
  const check = [
    { diamond: 1, iron: 1, stone: 1 },
    { diamond: 5, iron: 1, stone: 1 },
    { diamond: 25, iron: 5, stone: 1 },
  ]
  let answer = Infinity

  for (let i = 0; i < 3; i++) {
    if (picks[i] === 0) continue

    picks[i] -= 1
    bt(0, 0, i)
    picks[i] += 1
  }

  function bt(index, count, pick_index) {
    for (let i = 0; i < 5; i++) {
      if (index + i >= minerals.length) break

      count += check[pick_index][minerals[index + i]]
    }

    if (index >= minerals.length || picks.every((pick) => pick === 0)) {
      answer = Math.min(answer, count)
      return
    }

    for (let i = 0; i < 3; i++) {
      if (picks[i] === 0) continue

      picks[i] -= 1
      bt(index + 5, count, i)
      picks[i] += 1
    }
  }

  return answer
}
