var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
]; 

var result = input.map(function(square) {
  var sqx = square.x * square.x;
  var sqy = square.y * square.y;
  return Math.sqrt (sqx + sqy);
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


//The result should be an array of numbers corresponding to the x-y pairs provided 
// in the input array (ie: calculate z given x and y).
//x^2 + y^2 = z^2

