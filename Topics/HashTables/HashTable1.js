let exampleObject = {
  name: "Irfad",
  age: 25,
  job: "nil",
  scream: function () {
    console.log("Please help me");
  },
};

console.log(exampleObject.name);
//O(1)

exampleObject.father = "Exist";
//O(1)

exampleObject.scream()
//O(1)

console.log(exampleObject);
