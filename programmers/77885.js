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

function solution(numbers) {
  const answer = [];
  
  for (let number of numbers) {
      const bits = number.toString(2).split('')
      const lastZeroIndex = bits.lastIndexOf('0')
      
      if (lastZeroIndex === -1) {
          bits.splice(1, 0, '0')
      } else {
          const lastIndex = bits.length - 1
          
          if (bits[lastIndex] === '0') {
              bits[lastIndex] = '1'
          } else {
              [bits[lastZeroIndex], bits[lastZeroIndex + 1]] = [bits[lastZeroIndex + 1], bits[lastZeroIndex]]
          }
      }
      
      answer.push(parseInt(bits.join(''), 2))
  }
  
  return answer
}