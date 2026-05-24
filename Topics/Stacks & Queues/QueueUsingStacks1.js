/*
Implement Queue using stacks
*/
class queueStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  enqueue(value) {
    this.inStack.push(value);
  }
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    if (this.outStack.length === 0) {
      return "Queue is empty";
    }
    this.outStack.pop();
  }

  peek() {
    if (this.outStack.length === 0) {
      return "Queue is empty";
    }
    return this.outStack[this.outStack.length - 1];
  }

  isEmpty() {
    return this.outStack.length === 0 && this.inStack.length === 0;
  }
  print() {
    console.log(this.outStack);
  }
}

const newQueue = new queueStacks();

newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.dequeue();
console.log(newQueue.peek());
newQueue.print();

/*
⚡ Why This Works Efficiently

You only reverse the stack when needed, not every time.

So overall:

enqueue → O(1)
dequeue → O(1) amortized
*/
/*
inStack → collects incoming elements (enqueue)
outStack → gives elements in correct queue order (dequeue)
*/
