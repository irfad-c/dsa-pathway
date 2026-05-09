/*
Given an array=[2,5,1,2,3,5,1,2,4]
It should return first recurring character (here it is 2)
*/

function firstRecurring2(arr) {
  const seen = new Set();
  //Go through each value in arr, one by one.
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return undefined;
}

console.log(firstRecurring2([2, 5, 1, 2, 3, 5, 1, 2, 4]));

/*
Both time and space complexity is O(n) with set()
This approach return the number that repeats first in time order. 

seen.has(num)
seen.add(num)
Both are O(1)

Complexity
Time:
Loop runs once → O(n)
Space:
Set stores elements → O(n)

.has() is a method.
This:
for (let num of arr1)

👉 Gives you values directly

Equivalent to:
for (let i = 0; i < arr1.length; i++) {
  let num = arr1[i];
}
 */
