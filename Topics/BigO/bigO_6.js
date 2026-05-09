function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers - array");
  console.log(numbers);
  console.log("Numbers inside the array");
  numbers.forEach(function (numbers) {
    console.log(numbers);
  });
  console.log("These are their sums");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3]);

/*

Solution
--------

Here the looping part provide n^2 which is significant.
We are droping non dominant.
O(n^2)

*/
