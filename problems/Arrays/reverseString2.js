function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return;
  }
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
}

reverseString("My name is Irfad C");

/*
🧠 Visual Breakdown

Your string:
"My name"
After split(""):
["M", "y", " ", "n", "a", "m", "e"]
After .reverse():
["e", "m", "a", "n", " ", "y", "M"]
After .join(""):
"eman yM"
 */
