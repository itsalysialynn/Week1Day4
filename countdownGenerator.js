var countdownGenerator = function (x) {
  console.log("T-minus " + x + "...");
  return function () {
  x = x -1;
  if (x > 0) {
  	console.log("T-minus " + x + "...");
  } 
  if (x === 0) {
  	console.log("Blast Off!");
  }
  if (x < 0) {
  	console.log("Rockets already gone, bub!");
  }
}
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!