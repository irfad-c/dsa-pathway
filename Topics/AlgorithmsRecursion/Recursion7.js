function findFactorialRecursive(n) {
  if (n === 1) {
    return 1;
  }

  return n * findFactorialRecursive(n - 1);
}

console.log(findFactorialRecursive(5));

/*
findFactorialRecursive(1)=1
findFactorialRecursive(2)=2*1=2

factorial(5)
= 5 × factorial(4)
= 5 × 4 × factorial(3)
= 5 × 4 × 3 × factorial(2)
= 5 × 4 × 3 × 2 × factorial(1)
= 5 × 4 × 3 × 2 × 1
= 120

*/
