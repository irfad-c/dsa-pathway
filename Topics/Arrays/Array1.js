const arr1 = ["Irfad", "Amal", "Haridev", "Aswin"];

//push - O(1)
arr1.push("Sakker");

//pop - O(1)
arr1.pop();

//unshift - O(n)
arr1.unshift("Lalu");

//splice - O(n)
arr1.splice(2, 0, "Dayana");

console.log(arr1);
