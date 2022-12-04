// https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  const answer = numbers.map((number) => {
    if (number % 2 === 0) return number + 1

    const reverse = number.toString(2).split('').reverse()
    const firstOneIndex = reverse.findIndex((item) => item === '0')
    const checkIndex = firstOneIndex === -1 ? reverse.length : firstOneIndex

    return number + Math.pow(2, checkIndex - 1)
  })

  return answer
}
