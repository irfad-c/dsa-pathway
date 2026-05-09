// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

/*
  Solution
  --------
  function anotherFunChallenge(input) {
    let a = 5; 
    O(1)

    let b = 10;
      O(1)

    let c = 50; 
      O(1)

    for (let i = 0; i < input; i++) 
    O(n)
{ 
      let x = i + 1; 
      O(n)

      let y = i + 2; 
      O(n)

      let z = i + 3; 
        O(n)

    }
    for (let j = 0; j < input; j++)
    O(n) { 
      let p = j * 2; 
      O(n)

      let q = j * 2; 
      O(n)
    }
    let whoAmI = "I don't know"; 
    O(1)
  }

  Answer
  ------

  BigO(4+7n)
  */
