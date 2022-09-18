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
pq.enqueue(['test1', 2])
pq.enqueue(['test2', 3])
pq.enqueue(['test3', 1])
pq.printCollection()
pq.dequeue()
pq.front()
pq.size()
pq.isEmpty()
