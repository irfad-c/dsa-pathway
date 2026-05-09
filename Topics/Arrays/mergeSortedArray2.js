//2 pointer method

const mergeSortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Push remaining items
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
};

console.log(mergeSortedArray([1, 2, 3, 58], [3, 5, 7, 64]));
