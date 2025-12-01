const object1 = {
  name: "Irfad",

  get nameSetter() {
    return this.name;
    console.log(this.name);
  },
  set nameSetter(value) {
    if (value === "Saleem") {
      console.log("This name is not allowed");
      return;
    } else {
      this.name = value;
    }
  },
};

console.log(object1.nameSetter);
//This triggers get

object1.nameSetter = "Saleem";
//This triggers set

console.log(object1.nameSetter);

/*
🌟 Summary in One Line
get lets you read a property with custom logic.
set lets you update a property with custom logic
*/
