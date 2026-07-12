

function findFactorialIterative(n) {
  let sum = 1;
  while (n) {
    sum = sum * n;
    n--;
  }
  return sum;
}

console.log(findFactorialIterative(5));
