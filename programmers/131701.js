// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const set = new Set()
  const check = elements.concat(elements)
  const length = elements.length

  for (let i = 0; i < length; i++) {
    let sum = 0
    for (let t = 0; t < length; t++) {
      sum += check[i + t]
      set.add(sum)
    }
  }

  return set.size
}

function solution(elements) {
  const set = new Set()
  const length = elements.length

  for (let i = 1; i <= length; i++) {
    for (let t = 0; t <= length; t++) {
      let temp = 0

      for (let q = 0; q < i; q++) {
        const index = t + q >= length ? t + q - length : t + q
        temp += elements[index]
      }
      set.add(temp)
    }
  }

  return set.size
}
