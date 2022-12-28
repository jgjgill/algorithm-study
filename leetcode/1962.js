// https://leetcode.com/problems/remove-stones-to-minimize-the-total/

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
  const maxHeap = new MaxHeap()
  
  for (const pile of piles) {
    maxHeap.push(pile)
  }

  while (k !== 0) {
    const max = maxHeap.pop()
    const temp = max - Math.floor(max / 2)
    maxHeap.push(temp)
    k -= 1
  }

  return maxHeap.tree().reduce((acc, cur) => acc + cur)
};

class MaxHeap {
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

  while (current > 1 && this.heap[check] < this.heap[current]) {
    this.swap(check, current)
    current = check
    check = Math.floor(current / 2)
  }
}

pop() {
  const max = this.heap[1]
  if (this.heap.length <= 2) this.heap = [null]
  else this.heap[1] = this.heap.pop()

  let current = 1
  let left = current * 2
  let right = current * 2 + 1

  if (!this.heap[left]) return max
  if (!this.heap[right]) {
    if (this.heap[left] > this.heap[current]) {
      this.swap(left, current)
    }
    return max
  }

  while (
    this.heap[left] > this.heap[current] ||
    this.heap[right] > this.heap[current]
  ) {
    const maxIndex = this.heap[left] < this.heap[right] ? right : left

    this.swap(maxIndex, current)
    current = maxIndex
    left = current * 2
    right = current * 2 + 1
  }

  return max
}

tree() {
  return this.heap.slice(1)
}

length() {
  return this.heap.length - 1
}
}
