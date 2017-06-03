function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  for (var i = 0; i < list.length; i++) {
  }
  var nextNumber = 0;
  return function() {
    return list[nextNumber++];
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6

// Created a function that called makeLoadedDie() which returns a
// function that when called, generates random numbers between
// 1 and 6, but in fact returns numbers in a row from a hardcoded list.
