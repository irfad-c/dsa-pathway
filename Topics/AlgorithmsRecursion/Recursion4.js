let counter=0

function inception(){
  if(counter>3){
    return "This will print"
  }
  counter++
  return inception()
}
console.log(inception())

/*
return will print.

In recursive functions, if you want the result from the deeper recursive call to reach the original caller, you almost always write:

return recursiveFunction(...);

If you write only:

recursiveFunction(...);

the recursive call still happens, but its returned value is discarded.
*/