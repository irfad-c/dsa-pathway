function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    // while loop control the value of j
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      // j moves backward
      j--;
    }

    array[j + 1] = current;
  }
}

let array = [2, 4, 5, 423, 53, 6, 7, 14, 64];

InsertionSort(array);

console.log(array);

/*

Time complexity:

Best case: O(n)
Average/Worst case: O(n²)

Space complexity: O(1).

*/
