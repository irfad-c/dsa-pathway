/*
Optimized Queue using Array + Pointers (recommended)
*/
class Queue {
  constructor() {
    this.obj = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.obj[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const deqValue = this.obj[this.front];
    delete this.obj[this.front];
    this.front++;
    return deqValue;
  }
  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.obj[this.front];
  }
  print() {
    console.log(this.obj);
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

const newQueue=new Queue()
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)
newQueue.enqueue(40)
newQueue.dequeue()
console.log(newQueue.peek());
newQueue.print()



/*
front → points to the index of the element at the front (the one to be dequeued next).

rear → points to the index where the next new element will be enqueued.
*/

/*
Why this is better
No shifting
enqueue → O(1)
dequeue → O(1)
*/
/*
isEmpty is using comparison operator to return boolean values.
*/
