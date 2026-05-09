// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;
  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

funChallenge();

/* 
Solution
--------

//O(1) - This just runs once.
//O(n) -Linear - Run n time depend on the data

  let a = 10; 
  //some people count this for BigO.Not every one.
  //O(1)

  a = 50 + 3;
  //O(1)

  for (let i = 0; i < input.length; i++)
  //looping depends on the input
  //O(n)
  
    anotherFunction();
    //O(n)

    let stranger = true;
    //O(n)

    a++;
    //O(n)
  
  return a;
  //some people count this for BigO.Not every one.
  //O(1)

Answer is 3+4n

*/
