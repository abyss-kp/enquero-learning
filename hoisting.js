a();
var one = 1;
var one = 2;
function a() {
    var one = 3
    console.log('a first' + one)

}

function a() {
    console.log("hoisting " + one);
    var one = 4;
    console.log('after hoisting ' + one)
}

/*
function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

bigBrother();
*/



/*

//Variable Environement
function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one() // 2. New execution context is created on top of the stack.

*/