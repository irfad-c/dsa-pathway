class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    this.data[index] = value;
  }

  get(key) {
    const index = this._hash(key);
    return this.data[index];
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));

myHashTable.set("apples", 500);
console.log(myHashTable.get("apples"));

/*
Custom Hash Table

this.data=new Array(size)
this.data becomes a new array having this much size

const myHashTable = new HashTable(50);
creates something like:
[
  empty, empty, empty, ... total 50 items
]

Purpose of _hash
It takes a string key (e.g., "grapes") and converts it into a numeric index so you can store it inside the array.
key.charCodeAt(i)
This turns a letter into a number.
Why multiply by i?
To make each letter affect the hash differently.

hash = (hash + key.charCodeAt(i) * i) % this.data.length;
Add everything together & keep it inside array size
Let’s say your table size = 50
So we do:
(sum so far) % 50
This guarantees the final hash is always:
a number between 0 and 49

This simple version does not handle collisions, but it's perfect for understanding the basic idea.

const myHashTable = new HashTable(50);
This creates:
an object
inside that object → data (an array with 50 empty positions)
So internally:
Copy code
myHashTable = {
  data: [ empty × 50 ]
}
You now have a class object with an array inside it.
We are calling _hash inside set () method

data defined it in the constructor:
constructor(size) {
  this.data = new Array(size);
}
So every HashTable object automatically contains:
this.data

inside get this._hash means myHashTable._hash
*/
