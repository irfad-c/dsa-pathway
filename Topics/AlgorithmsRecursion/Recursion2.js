
let Argentina=0

function fifa(Argentina) {
  if (Argentina > 4) {
    console.log("Argentina won the match against Switzerland.");
    return
  }

  Argentina++

  fifa(Argentina);

  //fifa(++Argentina)
}
fifa(Argentina);
