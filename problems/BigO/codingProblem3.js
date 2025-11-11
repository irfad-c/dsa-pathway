
const array1 = ["a", "b", "c"];
const array2 = ["c", "d", "e"];

function handleMap(arr1, arr2) {
  let map = {};
  for (i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (j = 0; j < arr2.length; j++) {
    if (!map[arr2[j]]) {
      const item = arr2[j];
      map[item] = true;
    }
  }
  console.log(map);
}

handleMap(array1, array2);

//////////////////////////////////////////////////////////////

const array3 = ["a", "b", "c"];
const array4 = ["c", "d", "e"];

function hasCommonValue(arr1, arr2) {
  console.log(arr1.some((item) => arr2.includes(item)));
}

hasCommonValue(array3, array4);

/*

includes() — checks if an array contains a value

.some() — checks if at least one element passes a test

*/
