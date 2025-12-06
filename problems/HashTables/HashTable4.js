//Given an array=[2,3,4,5]
//It should return undefined

function firstRecurring(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return undefined;
}

console.log(firstRecurring([2,3,4,5]));

