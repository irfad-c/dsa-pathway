/*
It stores only values (no key)
It removes duplicates automatically
*/

const set = new Set();

set.add("apple");
set.add("banana");
set.add("apple");

console.log(set);
console.log("apple" in set);
console.log(set.has("apple"));

/*

# 🧠 1. What is `Set` in JavaScript?

`Set` is a **built-in class** provided by JavaScript (like `Array`, `Object`, `Map`).

So when you write:

const set = new Set();

👉 You are actually calling a **constructor**
👉 You just don’t see its internal code

### Internally (conceptually), it’s like:

class Set {
  constructor() {
    internal storage (hidden)
  }

  add(value) {
    logic to store unique values
  }
}
```

👉 This code exists inside the JavaScript engine (V8, etc.)
👉 You don’t need to define it yourself

* `Set` does NOT store data like `this.name`
* It stores values in a **special internal structure**
* That structure is **not accessible directly**


# 📦How `Set` actually stores data

You cannot see it, but internally it's something like:

```js
Set {
  [[values]]: ["apple", "banana"]
}
```

👉 This `[[values]]` is **internal (hidden slot)**
👉 Not like normal object properties


# 🔍 What happens step-by-step


const set = new Set();

👉 Creates empty Set


set.add("apple");

👉 Adds "apple"

set.add("banana");

👉 Adds "banana"


### Final structure (conceptual)


Set { "apple", "banana" }




# ⚡ Key difference from Object

| Feature                  | Object | Set |
| ------------------------ | ------ | --- |
| Stores key-value         | ✅      | ❌   |
| Stores unique values     | ❌      | ✅   |
| Internal storage visible | ✅      | ❌   |



# 💡 Bonus (very important)

You can even pass values directly:

const set = new Set(["apple", "banana", "apple"]);

👉 Output:


Set { "apple", "banana" }


👉 Automatically removes duplicates



# 🚀 Final clarity

* `Set` = built-in class
* `new Set()` = calling its constructor
* Internal storage = hidden
* Your custom `this.name` idea = not how Set works


⚠️ Why in fails here

in only checks object properties

Example:

const obj = {
  apple: true
};

console.log("apple" in obj); // true ✅

But Set is not like that

👉 It stores values internally (hidden), not as keys
in works with objects (key → value), not with Set values

*/
