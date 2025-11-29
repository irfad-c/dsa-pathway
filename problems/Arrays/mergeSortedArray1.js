const mergeSortedArray = (arr1, arr2) => {
  let mergedArray = [];
  console.log("Initial mergedArray", mergedArray);

  for (i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }
  console.log("After first for loop", mergedArray);
  for (j = 0; j < arr2.length; j++) {
    mergedArray.push(arr2[j]);
  }
  console.log(mergedArray);
};

mergeSortedArray([1, 2, 3, 58], [3, 5, 7, 64]);
