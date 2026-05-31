class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        return;
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return "Tree is empty";
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return `${value} found`;
      }
    }
    return `${value} not found`;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(1);
tree.insert(8);
tree.insert(20);
tree.insert(30);
console.log("This is the tree.", tree);
console.log(tree.lookup(10));
console.log(tree.lookup(99));
/*
this.root.value and currentNode.value are not same.
Because every time when the while loop runs we are updating the currentNode.
*/
