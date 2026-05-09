/*
Question
--------
Add  2 different numbers in the array to get given sum
*/

///////////////////////////////////////////////////////////////////////

//Naive

function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}
hasPairWithSum([1,2,3,4],8)

//Brute force (two loops) - Here time complexity is O(n^2)

///////////////////////////////////////////////////////////////////////

//Better

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}
hasPairWithSum2([1, 2, 4, 4], 8);
/*
A Set stores unique values and allows fast lookups (O(1) time).
We’ll use it to remember which number we need to form the target sum. 
Here the numbers inside the mySet is the difference of sum-arr[i].
So if we get any number inside this mySet through iteration we can get the sum.
for example if mySet contain number 2 means
8-6=2
that is our array already contain 6.We are looking for 2
then pair is (6,2)
*/

/*

Here time complexity is O(n).

*/


///////////////////////////////////////////////////////////////////////

function hasPairWithSum(arr, sum) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(sum - num)) return true;
    seen.add(num);
  }
  return false;
}

/*
Loop through each number
for (let num of arr)
We check one number (num) at a time.
num represents the current element of the array in that iteration.
*/

//Here time complexity is O(n)

