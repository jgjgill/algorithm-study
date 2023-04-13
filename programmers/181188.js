// https://school.programmers.co.kr/learn/courses/30/lessons/181188

function solution(targets) {
  targets.sort((a, b) => a[1] - b[1])

  let count = 1
  let check = targets[0][1] - 1

  for (const target of targets) {
    if (check >= target[0] && check <= target[1]) continue

    check = target[1] - 1
    count += 1
  }

  return count
}
