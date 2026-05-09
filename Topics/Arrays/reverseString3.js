const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("Suitable string is required");
    return;
  }
  const reversed = [...str].reverse().join("");
  console.log(reversed);
};

reverseString("My name is Irfad C");
