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

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // Case 1: No right child (the node being deleted has no right child.)
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
          }
        }

        // Case 2: Right child with no left child
        else if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left;

          if (!parentNode) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }
        }

        // Case 3: Right child has a left child
        else {
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;

          while (leftMost.left) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftMostParent.left = leftMost.right;

          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (!parentNode) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else {
              parentNode.right = leftMost;
            }
          }
        }

        return true;
      }
    }

    return false;
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

/*
BST deletion have three major situations
1. No right child
   Replace node with left subtree

2. Right child exists and has no left child
   Replace node with right child

3. Right child exists and has a left child
   Find the leftmost node in the right subtree
*/

/*
Case 1
------

(option A - Removing the root node when it has no right child)
    10
   /  \
  5   20

 if (!parentNode) {
            this.root = currentNode.left;
          }
when we try to remove the 10 then this code will run.

(option B - Removing a non-root node that is the left child of its parent and has no right child.)
      10
     /
    5
   /
  1

  else {
  if (currentNode.value < parentNode.value) {
    parentNode.left = currentNode.left;
  } 
}

when we try to remove the 5 then this code will run

(option C - Removing a non-root node that is the right child of its parent and has no right child)

    10
      \
      20
     /
    15
    
else {
    parentNode.right = currentNode.left;
  }
    when we try to remove the 20 then this code will run
*/

/*
Case 2
------
(Option A - Deleting root node and it's left child of the right node is null)
      10
     /  \
    5    15

  if (!parentNode)
       {this.root = currentNode.right}

  (Option B - Deleting a non root node.In this current node is left child of parent node)

          20
         /
       10
      /  \
     5   15

     First this will run currentNode.right.left = currentNode.left;
     temporarily gives:
          20
         /
       10
      /  \
     5   15
        /
       5

Then this will run
     parentNode.left = currentNode.right;
     Then final tree became
          20
         /
       15
      /
     5
 (Option C - Deleting a non root node.In this current node is right child of parent node)

      10   
       \  
       20
      /  \
     5   15

     First this will run currentNode.right.left = currentNode.left;
     temporarily gives:
      10   
       \  
       20
      /  \
     5   15
        /
       5
Then this will run
     parentNode.right = currentNode.right;
     Then final tree became
      10   
       \  
       15
         \
          5

*/

/*
     Case 3
     ------
(Option A - Deleting the root node whose right child has left node)
        20
       /  \
     10    30          
           /
         25

if (!parentNode) {this.root = leftMost}

        25
       /  \
     10    30

(Option B - Deleting the root node whose right child has deeper left child)            

          20
         /  \
       10    30
            /
          25
         /
       22


          22
         /  \
       10    30
            /
          25


(Option C - Deleting the root node whose right child has much more deeper left child)

             20
           /  \
         10    40
               /
             30
             /
           25
           /
         22

            22
           /  \
         10    40
               /
             30
             /
           25

(Option D - Deleting non root node whose currentNode is left child.)           

               50
              /
            20
           /  \
         10    40
               /
             30

 if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            }

               50
              /
            30
           /  \
         10    40

(Option E - Deleting non root node whose currentNode is right child.)

          10
            \
             20
            /  \
          15    40
                /
              30
else {parentNode.right = leftMost}
          10
            \
             30
            /  \
          15    40

Note
----
The only difference between the variants is:

Whether currentNode is the root.
Whether currentNode is a left or right child of its parent.
How deep the leftMost node is.

*/
