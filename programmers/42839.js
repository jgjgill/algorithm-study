// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const primeSet = new Set()

  dfs(numbers, '')

  return primeSet.size

  function dfs(checkNumbers, checkStringNumber) {
    for (const number of checkNumbers) {
      const newCheckNumbers = checkNumbers.replace(number, '')
      const newCheckStringNumber = checkStringNumber + number
      const newCheckNumber = Number(newCheckStringNumber)

      if (checkPrimeNumber(newCheckNumber)) primeSet.add(newCheckNumber)
      if (newCheckNumbers.length) dfs(newCheckNumbers, newCheckStringNumber)
    }
  }

  function checkPrimeNumber(number) {
    if (number === 0 || number === 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false
    }
    return true
  }
}
