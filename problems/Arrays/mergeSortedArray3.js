//Merge using spread + sort
const mergeSortedArray = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(mergeSortedArray([1, 2, 3, 58], [3, 5, 7, 64]));
