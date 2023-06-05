// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const stack = [];
  let index = 0;

  while (true) {
    let check = true;

    for (let i = index + 1; i < priorities.length; i++) {
      if (priorities[index] < priorities[i]) {
        if (index === location) location = priorities.length;

        priorities.push(priorities[index]);
        check = false;
        break;
      }
    }

    if (check) stack.push(priorities[index]);
    if (index === location) return stack.length;

    index++;
  }
}

function solution(priorities, location) {
  const stack = [];
  const length = priorities.length;
  priorities = priorities.map((priority, index) => [priority, index]);

  while (stack.length !== length) {
    stack.push(priorities.shift());

    for (let i = 0; i < priorities.length; i++) {
      if (stack.at(-1)[0] < priorities[i][0]) {
        priorities.push(stack.pop());
        break;
      }
    }
  }

  return stack.findIndex((item) => item[1] === location) + 1;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  let count = 0;

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }

  return count;
}
