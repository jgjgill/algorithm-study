// https://school.programmers.co.kr/learn/courses/30/lessons/176962

function solution(plans) {
  const stack = []
  const result = []
  plans = plans
    .map((plan) => [plan[0], changeMinutes(plan[1]), Number(plan[2])])
    .sort((a, b) => a[1] - b[1])

  for (const plan of plans) {
    if (stack.length === 0) {
      stack.push(plan)
      continue
    }

    let now = stack.at(-1)[1]

    while (now < plan[1] && stack.length !== 0) {
      const [name, start, play] = stack.pop()
      if (now + play <= plan[1]) result.push(name)
      else stack.push([name, start, now + play - plan[1]])

      now += play
    }

    stack.push(plan)
  }

  while (stack.length !== 0) result.push(stack.pop()[0])

  return result

  function changeMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number)
    return hours * 60 + minutes
  }
}
