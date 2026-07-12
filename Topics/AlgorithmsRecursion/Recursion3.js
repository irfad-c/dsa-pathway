let counter=0

function inception(){
  if(counter>3){
    return "This will not print"
  }
  counter++
  inception()
}
console.log(inception())

/*
return will not print.
Fifth call return This will not print.
But remaining calls(fourth,third,second,first) returns undefined.
*/