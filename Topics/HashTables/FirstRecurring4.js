/*
Given an array=[2,5,1,2,3,5,1,2,4]
It should return first recurring character (here it is 2)
*/
const firstRecurring = (arr) => {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in seen) return arr[i];
    seen[arr[i]] = true;
  }

  return undefined;
};
console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));

/*
Complexity
Time:
Single loop → O(n)
Space:
seen grows with input → O(n)

const seen = {
  2: true,
  5: true
};
console.log(2 in seen);   // true
console.log(1 in seen);   // false

const seen = { a: false };
console.log(seen["a"]);      // false
console.log("a" in seen);    // true ✅
seen[key] → checks value
key in seen → checks existence

const set = new Set([2, 5]);

set.has(2); // true
set.has(1); // false
*/
