class Animal {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.data.length;
    }
    console.log("This is hash value inside _hash function.", hash);
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    console.log("This is the address inside set method.", address);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    let bucket = this.data[address];
    console.log("This is bucket inside get method.", bucket);
    if (bucket) {
      for (let index = 0; index < bucket.length; index++) {
        if (bucket[index][0] === key) {
          console.log(
            "This is the value which is returned by using get method.",
            bucket[index][1],
          );

          return bucket[index][1];
        }
      }
    } else {
      console.log("Invalid bucket");
    }
  }
  getKeys() {
    let keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      let bucket = this.data[i];
      // console.log("This is bucket inside getKeys function.", bucket);

      //handling collision (if same index contains 2 arrays)
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          keysArray.push(bucket[j][0]);
        }
      }
    }

    return keysArray;
  }
}

const dog = new Animal(40);
dog.set("Arjun", 22);
dog.set("Aswin", 52);
dog.set("Irfad", 12);
console.log(dog);
dog.get("Arjun");
console.log("This is dog.__proto__.", dog.__proto__);
const test = dog.getKeys();
console.log("Testing getKeys working as expected.", test);

/*



Q)How does this._hash(){} run?
I think this refers to dog.Parent class of dog is Animal.We defined _hash inside the Animal.So we can access _hash using this._hash.

Q)Why are we using _hash instead of hash 
I think this is a naming convention.Because we are using a function inside class Animal._hash is not an exact function.But it act as a function to return hashed value.
*/

/*
🧠 Meaning of _ (underscore)
_hash()

👉 Conventionally means:

“This is internal/private-like method”
Why developers use _

To signal:

“Don’t call this from outside”
“Used internally by the class”

Example:

dog._hash("Arjun"); // possible, but discouraged
*/

/*
🧠 What is Animal.prototype?

👉 It’s just a shared object where methods are stored

When you write:

class Animal {
  set() {}
  get() {}
}

JavaScript internally does something like:

Animal.prototype.set = function() {};
Animal.prototype.get = function() {};

What happens when you create an object
const dog = new Animal(40);

Now internally:

dog = {
  data: [...],
  __proto__: Animal.prototype
}

👉 dog is linked to Animal.prototype
*/

/*
🔍 What’s really happening

Methods like _hash, set, get are stored on:

Animal.prototype

But they are:

non-enumerable properties

👉 And console.log only shows enumerable properties
*/
