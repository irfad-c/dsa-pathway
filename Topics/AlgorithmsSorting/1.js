// Bubble sort

let array = [3, 1, 2];

function BubbleSort(array) {
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength-1; i++) {
    for (let j = 0; j < arrayLength-1-i; j++) {
      let temp;
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j+1];
        array[j+1]=temp
      }
    }
  }

}

BubbleSort(array)

console.log(array);

/*

Time complexity = O(n^2)
Space compelexity = O(1)

*/
