function fibonacciSeriesRecursive(n) {

  if (n === 0) return 0;
  if (n === 1) return 1;
return fibonacciSeriesRecursive(n-1)+fibonacciSeriesRecursive(n-2)


}


console.log(fibonacciSeriesRecursive(3));


/*
Every recursive call creates new local variables. It does not continue from the previous call like a loop does.
*/

/*
Time complexity = O(2^n)
Space complexity = O(n)
*/