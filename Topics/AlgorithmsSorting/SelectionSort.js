// Selection Sort

let array = [22, 33, 3, 32, 5, 1, 65];

function SelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // Assuming element at index i is the smallest.
    let minimum = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) {
        minimum = j;
      }
    }
    let temp = array[i];
    array[i] = array[minimum];
    array[minimum] = temp;
  }
}

SelectionSort(array);

console.log(array);

/*

Time complexity = O(n^2)
Space complexity = O(1)

For each iteration, we consider array[i] as the smallest element
and store its index in minimum.

The inner loop uses j to search the remaining unsorted elements.

If a smaller element is found, we update minimum with its index.

After searching the remaining elements, we swap array[i]
with array[minimum].

After each iteration, the element at index i is in its correct position.

i        → position where we want to place the smallest element
minimum  → index of the smallest element found so far
j        → index currently being compared
*/
