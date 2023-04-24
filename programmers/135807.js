// https://school.programmers.co.kr/learn/courses/30/lessons/135807

function solution(arrayA, arrayB) {
  let gcd_a = arrayA[0]
  let gcd_b = arrayB[0]

  for (let i = 1; i < arrayA.length; i++) {
    gcd_a = getGCD(gcd_a, arrayA[i])
    gcd_b = getGCD(gcd_b, arrayB[i])
  }

  return Math.max(getAnswer(gcd_a, arrayB), getAnswer(gcd_b, arrayA))

  function getGCD(num1, num2) {
    return num2 > 0 ? getGCD(num2, num1 % num2) : num1
  }

  function getAnswer(gcd, array) {
    if (array.every((item) => item % gcd !== 0)) return gcd
    return 0
  }
}
