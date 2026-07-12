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
*/
