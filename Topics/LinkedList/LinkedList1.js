class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    /*  Tail points to the same node */
    this.tail = this.head;
    this.length = 1;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);

/* Here value will be coming from LinkedList(10) 
This code creates a Linked List with one node where head and tail both point to the same first element.
Inside a class constructor, this always refers to the newly created object.
Here inside the constructor, every this refers to myLinkedList.
*/
