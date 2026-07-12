function A(){
  B()
}

function B(){
  C()
}

function C(){
  return "This will not print"
}

console.log(A())