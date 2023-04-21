// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  let answer = ""
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g")
  )

  for (const char of s) {
    const newIndex = matched.indexOf(char) + index
    answer += matched[newIndex % matched.length]
  }

  return answer
}

function solution(s, skip, index) {
  const check = skip.split("")
  let answer = ""

  for (const char of s) {
    const charCode = char.charCodeAt(0)
    let count = 1
    let skipCount = 0

    while (count <= index) {
      const plusCharCode = changeCharCodeToAlphabet(
        charCode + count + skipCount
      )
      if (skip.includes(plusCharCode)) skipCount += 1
      else count += 1
    }

    answer += changeCharCodeToAlphabet(charCode + index + skipCount)
  }

  return answer

  function changeCharCodeToAlphabet(char) {
    while (char > 122) {
      char -= 26
    }

    return String.fromCharCode(char)
  }
}

function solution(s, skip, index) {
  skip = skip.split("").map((item) => item.charCodeAt())
  let result = ""

  for (const char of s) {
    let cur = char.charCodeAt()
    let check = index

    while (check !== 0) {
      if (cur + 1 === 123) cur = 97
      else cur += 1

      if (!skip.includes(cur)) check -= 1
    }

    result += String.fromCharCode(cur)
  }

  return result
}
