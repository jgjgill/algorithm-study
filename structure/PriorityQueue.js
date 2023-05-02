function PriorityQueue() {
  const collection = []

  this.printCollection = function () {
    console.log(collection)
  }

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false

      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break
        }
      }

      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function () {
    const value = collection.shift()
    return value[0]
  }

  this.front = function () {
    return collection[0]
  }

  this.size = function () {
    return collection.length
  }

  this.isEmpty = function () {
    return collection.length === 0
  }
}

const pq = new PriorityQueue()
pq.enqueue(["test1", 2])
pq.enqueue(["test2", 3])
pq.enqueue(["test3", 1])
pq.printCollection()
pq.dequeue()
pq.front()
pq.size()
pq.isEmpty()

class PriorityQueueWithHeap {
  constructor() {
    this.heap = []
  }

  // element: the element to add to the queue
  // priority: the priority of the element (higher number means higher priority)
  enqueue(element, priority) {
    const node = { element, priority }
    this.heap.push(node)
    this.bubbleUp(this.heap.length - 1)
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const root = this.heap[0]
    const lastNode = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = lastNode
      this.bubbleDown(0)
    }

    return root.element
  }

  // Return the element with the highest priority without removing it
  peek() {
    return this.heap[0] ? this.heap[0].element : null
  }

  // Return true if the queue is empty, false otherwise
  isEmpty() {
    return this.heap.length === 0
  }

  // Return the number of elements in the queue
  size() {
    return this.heap.length
  }

  // Move the element at the given index up the tree until it is in the correct position
  bubbleUp(index) {
    const node = this.heap[index]

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parentNode = this.heap[parentIndex]

      if (node.priority >= parentNode.priority) {
        break
      }

      this.heap[index] = parentNode
      this.heap[parentIndex] = node
      index = parentIndex
    }
  }

  // Move the element at the given index down the tree until it is in the correct position
  bubbleDown(index) {
    const node = this.heap[index]
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2

    let leftChild, rightChild
    let swapIndex = null

    if (leftChildIndex < this.heap.length) {
      leftChild = this.heap[leftChildIndex]
      if (leftChild.priority < node.priority) {
        swapIndex = leftChildIndex
      }
    }

    if (rightChildIndex < this.heap.length) {
      rightChild = this.heap[rightChildIndex]
      if (
        (swapIndex === null && rightChild.priority < node.priority) ||
        (swapIndex !== null && rightChild.priority < leftChild.priority)
      ) {
        swapIndex = rightChildIndex
      }
    }

    if (swapIndex === null) {
      return
    }

    this.heap[index] = this.heap[swapIndex]
    this.heap[swapIndex] = node
    this.bubbleDown(swapIndex)
  }
}
