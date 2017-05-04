var myArray = [1, 2, 3, 4, 5, 6, 7];


function map (arr, addOne) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
	var add = arr[i];
	result.push(addOne(add));
  }
	
   return result;
}

console.log(map(myArray, function(add) {
	return add + 1;
}));

