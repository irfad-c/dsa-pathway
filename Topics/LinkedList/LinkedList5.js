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

    let first = this.head;
    this.tail = this.head; // old head becomes new tail
    let second = first.next;
    first.next = null; // 🔥 CRITICAL LINE

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head = first;
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

/*
In the prev/current reverse method, the old head points to null automatically in the first iteration because prev starts as null.

When reversing a singly linked list, the original head must point to null before reversing links.*/
