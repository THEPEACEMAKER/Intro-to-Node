function printHello() {
  console.log("Hello");
}

function printWorld() {
  console.log(" World!");
}

// Now call above function after 2 seconds
setInterval(printHello, 2000);

var intervalId = setInterval(printWorld, 2000);
clearInterval(intervalId);
