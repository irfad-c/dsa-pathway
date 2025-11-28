function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return;
  }
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
}

reverseString("My name is Irfad C");
