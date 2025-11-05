function nothing(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("This is console");
  }
}

nothing([1, 2, 3]);

/*
Solution
--------
➤ Time Complexity:

The loop runs n.length times → O(n)

➤ Space Complexity:

You’re not creating any new data structures → O(1)

*/

function arrayOfItems(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = "Hi";
  }
  return array;
}

console.log(arrayOfItems(6));
/*
Solution
--------
➤ Time Complexity:

Loop runs n times → O(n)

➤ Space Complexity:

You are creating an array of size n → O(n)
 */
