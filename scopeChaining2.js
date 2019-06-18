
function a() {
    var myvar = 10;
    function b() {
        console.log("inside b", myvar)
        /* 
        If var is not declared the it refers to the outer context where the function is created(sits physically)
        Here outer scope of function is the outer fuction scope ,so myvar=10
        */
    }
    b()
}
var myvar = 2
a()
console.log("after a", myvar)