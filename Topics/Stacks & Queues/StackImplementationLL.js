/*
Stack implementation using linked list
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (!this.top) return "Stack is empty";
    const removed = this.top;
    this.top = this.top.next;
    this.size--;
    return removed.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  print() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}


const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
// 30
// 20
// 10

console.log(stack.pop()); // 30
console.log(stack.peek()); // 20

/*
newNode.next = this.top;
Make this new node point to the current top node

this.top = newNode;
Now this new node becomes the top

stack.push(10)
const newNode = new Node(value);
Here newNode at the beginning will be {value=10,next=null}
second step  newNode.next = this.top;
Here {value=10,next=null} (since nothing will be at the top at the beginning)
third step this.top = newNode;
now 
top → Node(10)
top stores a reference, not a raw object copy
top points to this {value:10,next:null},size=0
this.size++;
now top={value:10,next:null},size=1

top → [30 | next] → [20 | next] → [10 | null]
this.top → Node(30)
this.top.next → Node(20)

this.top.value      // 20
this.top.next       // Node(10)
this.top.next.value // 10

Node {
  value: 30,
  next: Node { value: 20, next: Node { value: 10, next: null } }
}
*/