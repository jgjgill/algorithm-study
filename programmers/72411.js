// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const result = []

  for (const course_num of course) {
    const check = {}

    for (let order of orders) {
      order = order.split("").sort().join("")
      bt(order, "", 0, course_num, check)
    }
    const temp_check = Object.entries(check).sort((a, b) => b[1] - a[1])

    temp_check
      .filter(([key, value]) => temp_check[0][1] === value && value >= 2)
      .forEach(([key, value]) => result.push(key))
  }

  return result.sort()

  function bt(order, temp, index, max_count, check) {
    if (temp.length === max_count) {
      if (!(temp in check)) check[temp] = 1
      else check[temp] += 1
      return
    }

    for (let i = index; i < order.length; i++) {
      bt(order, temp + order[i], i + 1, max_count, check)
    }
  }
}
