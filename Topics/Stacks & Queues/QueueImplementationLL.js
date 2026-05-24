/*
Queue using Linked List (most “pure” approach)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = this.rear = newNode;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }
  dequeue() {
    if (!this.front) return "Queue is empty";
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return value;
  }
  peek() {
    if (this.front) {
      return this.front.value;
    }
  }
  print() {
    let current = this.front;
    let arr = [];
    while (current) {
      arr.push(current.value);

      current = current.next;
    }
    console.log(arr);
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.peek()); // 10
console.log(q.dequeue()); // 10
console.log(q.peek()); // 20
q.print(); // [20, 30]
