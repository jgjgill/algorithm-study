// https://school.programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  let count = 0
  let check = name.length - 1

  name.split("").forEach((now, idx) => {
    count += change(now)
    let index = idx + 1

    while (name[index] === "A") index += 1

    check = Math.min(
      check,
      idx * 2 + name.length - index,
      idx + 2 * (name.length - index)
    )
  })

  return count + check

  function change(char) {
    const left = 90 - char.charCodeAt() + 1
    const right = char.charCodeAt() - 65
    return Math.min(left, right)
  }
}
