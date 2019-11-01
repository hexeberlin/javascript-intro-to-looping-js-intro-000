function forLoop(array){
  for(let i=0; i<25; i++) {
    if (i===1) array.push("I am 1 strange loop.")
    else array.push("I am "+i+" strange loops.")
  }
  return array;
}

function whileLoop(number){
  let countdown = number
  while(countdown > -1) {
    console.log (countdown--);
  }
  return "done"
}

function incrementVariable(i) {
  i = i + 1;
  return i;
}

function doWhileLoop(number){
  do {
    console.log("I run once regardless.")
  } while (incrementVariable(0) < number)
}