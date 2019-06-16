const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) { //use let
  setTimeout(function () {
    console.log('I am at index ' + i)
  }, 3000)
}

//const array = [1,2,3,4];
for (var j = 0; j < array.length; j++) {
  (function (closureI) {
    setTimeout(function () {
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(j)
}