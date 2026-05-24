/*
Simple Queue using Array (easy but not optimal)
*/

class Queue {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
  }
  dequeue() {
    if (this.arr.length === 0) return "Stack is empty";
    this.arr.shift();
  }
  peek() {
    if (this.arr.length === 0) return "Stack is empty";
    return this.arr[("This is the front end value", this.arr[0])];
  }
  print() {
    console.log(this.arr);
  }
}

const newQueue = new Queue();

newQueue.push(10);
newQueue.push(20);
newQueue.push(30);
newQueue.push(40);

newQueue.dequeue();
console.log(newQueue.peek());
newQueue.print();
