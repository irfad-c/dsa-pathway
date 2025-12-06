/*
Given an array=[2,1,1,2,3,5,1,2,4]
It should return 1
*/

function firstRecurring(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return undefined;
}

console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));

/*
seen.has(num)
seen.add(num)
Both are O(1)
 */
