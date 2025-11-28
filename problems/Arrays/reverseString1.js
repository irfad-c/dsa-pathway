function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("Provide suitable string");
    return;
  }
  let revString = [];
  const stringLength = str.length - 1;
  for (let i = stringLength; i >= 0; i--) {
    revString.push(str[i]);
  }
  console.log(revString);
  return revString.join("");
}

console.log(reverseString("My name is Irfad C"));
