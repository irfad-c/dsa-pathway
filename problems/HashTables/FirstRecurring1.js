/*
Given an array=[2,5,1,2,3,5,1,2,4]
It should return first recurring character (here it is 2)
*/

function firstRecurring1(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) {
        return arr[i];
      }
  }
  return undefined;
}

console.log(firstRecurring1([2, 5, 1, 2, 3, 5, 1, 2, 4]));

/* 


Time complexity
⚡ Best Case
If the first recurring element is found early (like [2,2,...]):
👉 It returns quickly → O(1)
❌ Worst Case
If no recurring element or it’s at the end:
👉 It checks almost all pairs → O(n²)

🧠 Space Complexity
You are NOT using any extra data structures(Only using array at the time of input)
Only variables i and j(we are storing data in these variables.No arrays,no objects,no new storage.)
✅ O(1) (Constant space)

This is brute force approach.
Brute force means:
👉 Trying all possible combinations without optimization
*/
