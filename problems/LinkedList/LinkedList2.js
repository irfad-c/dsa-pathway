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
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);

/* head
 ↓
1 → 10 → 5 → 16 → null
                ↑
               tail */

/* append and prepend are different functions.So the local variable newNode exist only inside the function scope */
