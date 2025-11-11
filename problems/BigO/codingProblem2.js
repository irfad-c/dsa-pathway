/*
Question
--------
Check common values exist in 2 arrays

 */

const array1 = ["1", "2", "3"];
const array2 = ["3", "4", "5"];

function hasCommonValue(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      console.log("Common value exists:", arr1[i]);
      return true;
    }
  }
  console.log("There is no common value");
  return false;
}

hasCommonValue(array1, array2);
