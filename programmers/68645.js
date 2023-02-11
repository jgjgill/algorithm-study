// https://school.programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
    const check = Array.from({length: n}, (_, index) => Array(index + 1).fill(0))
    let checkX = -1
    let checkY = 0
    let count = 0
    
    while (n >= 0) {
        for (let i = 0; i < n; i++) {
            checkX += 1
            count += 1
            
            check[checkX][checkY] = count
        }
        
        for (let i = 0; i < n - 1; i++) {
            checkY += 1
            count += 1
            
            check[checkX][checkY] = count
        }
        
        for (let i = 0; i < n - 2; i++) {
            checkX -= 1
            checkY -= 1
            count += 1
            
            check[checkX][checkY] = count
        }
        
        n -= 3
    }
    
    return check.flat()
}

