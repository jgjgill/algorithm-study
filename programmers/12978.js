// https://school.programmers.co.kr/learn/courses/30/lessons/12978

function solution(N, road, K) {
  const min_times = Array.from({ length: N + 1 }, () => Infinity)
  const dicts = Array.from({ length: N + 1 }, () => [])
  const queue = [[1, 0]]

  min_times[1] = 0

  for (const [to, from, time] of road) {
    dicts[to].push([from, time])
    dicts[from].push([to, time])
  }

  while (queue.length !== 0) {
    const [to, time] = queue.pop()

    for (const [next_to, next_time] of dicts[to]) {
      if (min_times[next_to] <= time + next_time) continue

      min_times[next_to] = time + next_time
      queue.push([next_to, min_times[next_to]])
    }
  }

  return min_times.filter((min_time) => min_time <= K).length
}
