function fifa(Argentina) {
  if (Argentina > 4) {
    console.log("Argentina won the match against Switzerland.");
    return;
  }

  // fifa(Argentina++); // Infinite recursion
  fifa(++Argentina);    // Correct
}

fifa(0);

/*
Post-increment (x++):

1. Increments the variable.
2. Returns the OLD value.

Example:

let counter = 0;

console.log(counter++); // 0 (old value)
console.log(counter);   // 1 (counter was incremented)


Pre-increment (++x):

1. Increments the variable.
2. Returns the NEW value.

Example:

let counter = 0;

console.log(++counter); // 1 (new value)
console.log(counter);   // 1
*/