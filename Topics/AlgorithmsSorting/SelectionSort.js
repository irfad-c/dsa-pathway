// Bubble Sort

let array = [22, 33, 3, 32, 5, 1, 65];

function SelectionSort(arr) {

    for (let j = 0; j < arr.length - 1; j++) {

        let smallest = j;

        for (let i = j + 1; i < arr.length; i++) {

            if (arr[i] < arr[smallest]) {
                smallest = i;
            }
        }

        // swap
        let temp = arr[j];
        arr[j] = arr[smallest];
        arr[smallest] = temp;
    }
}

SelectionSort(array);

console.log(array);

/*

Time Complexity: O(n²)
Space Complexity: O(1)

*/