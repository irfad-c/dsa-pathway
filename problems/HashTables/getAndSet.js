const object1 = {
  name: "Irfad",

  get nameSetter() {
    return this.name;
  },

  set nameSetter(value) {
    if (value === "Saleem") {
      console.log("Saleem is not allowed");
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

object1.nameSetter = "Ruksana";
//This triggers set

console.log(object1.nameSetter);
/*

get lets you read a property with custom logic.
set lets you update a property with custom logic

Reading a property → get runs
Assigning a value → set runs

nameSetter is defined as a getter, not a function.
getters are accessed like properties, not called.

Simple rule to remember
Action	Syntax
Get value	obj.prop
Set value	obj.prop = value
❌ Never	obj.prop()
*/
