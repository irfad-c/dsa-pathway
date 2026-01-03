/*
Implemented reversing in a singly linked list - Method 1
*/
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    /* Tail points to the same node 
       At the beginning only one node exist.*/
    this.tail = this.head;
    //One node already exists
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    //connect old tail to newNode
    this.tail.next = newNode;
    this.tail = newNode;
    //increase length
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  //here index is less than our passed index by 1 (index=index-1)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head || !this.head.next) {
      return this.printList();
    }

    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current !== null) {
      const nextNode = current.next; // save next
      current.next = prev; // reverse pointer
      prev = current; // move prev
      current = nextNode; // move current
    }

    this.head = prev;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.prepend(0);
myLinkedList.insert(2, 3);
myLinkedList.insert(30, 30);
myLinkedList.remove(3);
console.log("This is myLinkedList :", myLinkedList);
console.log("LinkedList printed as array :", myLinkedList.printList());
console.log("LinkedList reversed :", myLinkedList.reverse());

/*Before this.head=prev
prev → 30 → 10 → 3 → 1 → 0 → null
head → 0   (WRONG now)
After this line runs:
head → 30 → 10 → 3 → 1 → 0 → null
✅ Now the linked list is correct.

In the above reversal code prev starts as null, the first reversal automatically makes the old head point to null
So this line:
current.next = prev;
does the job for us in the very first iteration.

*/
