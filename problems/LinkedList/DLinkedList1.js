class DoublyLinkedList {
  constructor(value) {
    //These are the properties of the class
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: this.tail,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
      prev: null,
    };
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    const newNode = {
      value: value,
      next: follower,
      prev: leader,
    };
    leader.next = newNode;
    follower.prev = newNode;
    this.length++;
  }
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
    if (index === 0) {
      // remove head
      const newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      this.length--;
      return;
    }
    if (index >= this.length - 1) {
      // remove tail
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;
    const follower = nodeToRemove.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
  }
  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
   reversePrintList() {
    let arr = [];
    let currentNode = this.tail;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return arr
  }
}

const newDoublyLinkedList = new DoublyLinkedList(10);
newDoublyLinkedList.append(20);
newDoublyLinkedList.prepend(1);
newDoublyLinkedList.insert(2, 2);
newDoublyLinkedList.remove(3);
console.log("Linked List :", newDoublyLinkedList);
console.log("As array :", newDoublyLinkedList.printList());
console.log("As reversed array :", newDoublyLinkedList.reversePrintList());

/*
Short answer first

❌ newNode = leader.next (here left side - newNode is a variable and we are changing the variable reference)
✅ leader.next = newNode (here left side - object.property - changes the structure)

They do completely opposite things.
newNode = leader.next changes a variable; leader.next = newNode changes the list — they are NOT the same.

*/
