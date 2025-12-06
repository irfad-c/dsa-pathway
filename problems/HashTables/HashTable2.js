//Given an array=[2,5,1,2,3,5,1,2,4]
//It should return 2

//Here time complexity is O(n);
//Space complexity is O(1)
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

//Both time and space complexity is O(n) with set()
function firstRecurring2(arr) {
  const seen = new Set();
  //Go through each value in arr, one by one.
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return undefined;
}

console.log(firstRecurring2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
