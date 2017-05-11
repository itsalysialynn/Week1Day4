var countdownGenerator = function(x) {
  console.log("T-minus " + x + "...");
  return function () {
    var x = x - 1;
    if (x > 0) {
      console.log("T-minus " + x + "...");
    }
    if (x === 0) {
      console.log("Blast Off!");
    }
    if (x < 0) {
      console.log("Rockets already gone, bub!");
    }
  };
};

var countdown = countdownGenerator(3);
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();