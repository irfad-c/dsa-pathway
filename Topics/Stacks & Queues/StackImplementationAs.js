/*
Stack implementatioon using arrays.
*/

class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    return this.arr.push(value);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    if (this.arr.length === 0) return "Stack is empty";
    return this.arr[this.arr.length-1];
  }
  print() {
    console.log(this.arr);
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("This will give the length of the array",stack.push(40));
console.log("This will give which element removed from the array.",stack.pop());
console.log(stack.peek());
stack.print();

/*
There are two layers here:

JavaScript Array behavior
push() → returns new length
pop() → returns removed element
Your Stack class
Only returns something if you explicitly return it
*/