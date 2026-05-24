/*
Implementation of queues using stacks.
One Stack Version (Not Recommended, but asked in interviews)
*/
class QueueOneStack {
  constructor() {
    this.stack = [];
  }

  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    if (this.stack.length === 0) {
      return "Queue is empty";
    }

    if (this.stack.length === 1) {
      return this.stack.pop();
    }

    const temp = this.stack.pop();
    console.log("This is temp : ", temp);

    const result = this.dequeue();
    console.log("This is result : ", result);

    this.stack.push(temp);
    console.log("This is stack : ", this.stack);

    return result;
  }
}

const newQueue = new QueueOneStack();
newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);

console.log(newQueue.dequeue());

/*
When you call dequeue() on [10,20,30,40], here’s the breakdown:

First call: temp = 40, then const result = this.dequeue() → pauses here.

Second call: temp = 30, then calls dequeue() again.

Third call: temp = 20, then calls dequeue() again.

Fourth call: stack has [10], base case → returns 10.

Now the unwinding begins: each paused call resumes right after its recursive line.

Third call resumes: result = 10, then this.stack.push(20) runs.

Second call resumes: result = 10, then this.stack.push(30) runs.

First call resumes: result = 10, then this.stack.push(40) runs.
*/
/*
Each recursive call has its own copy of temp stored in its own stack frame.

When the deeper call returns, the paused function still has its local temp value waiting.

That’s why after const result = this.dequeue(); finishes, the code can still do this.stack.push(temp) — it hasn’t lost that value.
*/
