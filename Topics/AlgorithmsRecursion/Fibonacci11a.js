function fibonacciSeriesIterative(n) {
  let IndexValue = 0;
  let FirstValue = 0;
  let SecondValue = 1;

  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    IndexValue = FirstValue + SecondValue;
    FirstValue = SecondValue;
    SecondValue = IndexValue;
  }

  return IndexValue;
}

console.log(fibonacciSeriesIterative(0));
console.log(fibonacciSeriesIterative(1));
console.log(fibonacciSeriesIterative(2));
console.log(fibonacciSeriesIterative(3));
console.log(fibonacciSeriesIterative(4));
console.log(fibonacciSeriesIterative(5));
console.log(fibonacciSeriesIterative(6));


/*
Time complexity = O(n)
Space complexity= O(1)
*/

