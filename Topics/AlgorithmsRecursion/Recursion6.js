function A(){
 return B()
}

function B(){
  return C()
}

function C(){
  return "This will print"
}

console.log(A())