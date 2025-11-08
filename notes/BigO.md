What is Big O?

Big O notation is a way to describe how the performance of your code scales as the input size (`n`) grows.

It doesn’t measure exact time or exact memory
it describes how fast those things grow when input increases.

There are two main uses of Big O

1. Time Complexity (Speed)

👉 Measures how much time an algorithm takes as input grows

O(1) Constant time — runs instantly, regardless of input size
O(n) Linear time — grows directly with input size  
O(n²) Quadratic time — grows with the square of input size  
O(log n)Logarithmic time — grows slowly as input increases

Example:

for (let i = 0; i < n; i++) {
console.log(i);
}
→ Runs `n` times → Time complexity = O(n)

2. Space Complexity (Memory)

👉 Measures how much extra memory (RAM) your algorithm uses as input grows.

Example:

let array = [];
for (let i = 0; i < n; i++) {
array[i] = i;
}

→ Creates an array of size `n` → Space complexity = O(n)

---
