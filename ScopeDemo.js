function varScoping() {
  var x = 1;

  if (true) {
    var x = 20;
    console.log(x);
  }

  console.log(x);
}

function letScoping() {
  //let x = 100;

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}

//letScoping();
varScoping();