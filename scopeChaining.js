function b() {
    console.log("inside b", myvar)
    /* 
    If var is not declared the it refers to the outer context where the function is created(sits physically)
    Here outer scope of function is the global scope ,so myvar=2
    */
}
function a() {
    var myvar = 10;
    b()
    console.log("after b", myvar)
}
var myvar = 2
console.log("before a", myvar)
a()
console.log("after a", myvar)