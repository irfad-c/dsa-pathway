/*
Question
-------- 

Finding common values exist in 2 arrays

 */

//////////////////////////////////////////////////////////////////////////

const array5 = ["1", "2", "3"];
const array6 = ["3", "4", "5"];

const set2 = new Set(array6);
const commonValues = array5.filter((item) => set2.has(item));

console.log(
  commonValues.length
    ? "Common values exist: " + commonValues
    : "There are no common values"
);

//////////////////////////////////////////////////////////////////////////

const array3 = ["1", "2", "3"];
const array4 = ["3", "4", "5"];

const commonValues1 = array3.filter((item) => array4.includes(item));

if (commonValues1.length > 0) {
  console.log("Common values exist:", commonValues1);
} else {
  console.log("There are no common values");
}

//////////////////////////////////////////////////////////////////////////

const array7 = ["1", "2", "3", "3"];
const array8 = ["3", "4", "5", "3"];

const common = [...new Set(array7)].filter((item) => array8.includes(item));
console.log("Unique common values:", common);

/*

Wrong
-----

const array1 = ["1", "2", "3"];
const array2 = ["3", "4", "5"];

function returnFirstArray(){
  array1.forEach(i=0,i<array1.length,i++){
    return a=array1[i];
  }
}

function returnSecondArray(){
  array2.forEach(i=0,i<array2.length,i++){
    return b= array2[i];
  }
}

function booleanArray(){
 returnFirstArray();
 returnSecondArray();
 if(a==b){
  console.log("common value exist")
 }
else{
  console.log("There is no common value");
}
}

*/
