// https://school.programmers.co.kr/learn/courses/30/lessons/142085

function solution(n, k, enemy) {
  const heap = new MinHeap()

  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i])

    if (heap.length() > k) {
      n -= heap.pop()
    }

    if (n < 0) return i
  }

  return enemy.length
}

class MinHeap {
  constructor() {
    this.heap = [null]
  }
  swap(a, b) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  push(element) {
    this.heap.push(element)
    let current = this.heap.length - 1
    let check = Math.floor(current / 2)

    while (current > 1 && this.heap[check] > this.heap[current]) {
      this.swap(check, current)
      current = check
      check = Math.floor(current / 2)
    }
  }

  pop() {
    const min = this.heap[1]
    if (this.heap.length <= 2) this.heap = [null]
    else this.heap[1] = this.heap.pop()

    let current = 1
    let left = current * 2
    let right = current * 2 + 1

    if (!this.heap[left]) return min
    if (!this.heap[right]) {
      if (this.heap[left] < this.heap[current]) {
        this.swap(left, current)
      }
      return min
    }

    while (
      this.heap[left] < this.heap[current] ||
      this.heap[right] < this.heap[current]
    ) {
      const minIndex = this.heap[left] > this.heap[right] ? right : left

      this.swap(minIndex, current)
      current = minIndex
      left = current * 2
      right = current * 2 + 1
    }

    return min
  }

  length() {
    return this.heap.length - 1
  }
}
