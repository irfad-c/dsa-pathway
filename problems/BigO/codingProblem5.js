/*
Question
--------
Add  2 numbers (The numbers can be same) in the array to get given sum
*/

///////////////////////////////////////////////////////////////////////

//Naive

const hasPairWithSum = (arr, sum) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++)
      if (arr[i] + arr[j] == sum) {
        console.log("Match found", arr[i], arr[j]);
      }
  }
  return false;
};

hasPairWithSum([1, 2, 3], 6);

//Brute force (two loops) - Here time complexity is O(n^2)

const hasPairWithSum2 = (arr, sum) => {
  const length = arr.length;
  const mySet = new Set();

  for (let i = 0; i < length; i++) {
    if (mySet.has(sum-arr[i])) {
      console.log("Pair found");
    } else {
      mySet.add(arr[i]);
    }
  }
};

hasPairWithSum2([1, 2, 3,3], 6);