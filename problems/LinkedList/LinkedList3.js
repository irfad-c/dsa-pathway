/* 
Implemented printed list function
Implemented LinkedIn insertion
Insert is O(n) 
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
    const holdingPointer=leader.next
    leader.next=newNode
    newNode.next=holdingPointer
    this.length
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.prepend(0);
myLinkedList.insert(2,3);
myLinkedList.insert(30,30);
console.log(myLinkedList.printList());
