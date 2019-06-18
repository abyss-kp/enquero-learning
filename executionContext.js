function b() {
    console.log("in b", myvar)
    var myvar;
}
function a() {
    console.log("in a", myvar)
    var myvar = 10;
    b()
    console.log("aftr b", myvar)
}
var myvar = 2
console.log("b4 a", myvar)
a()
console.log("aftr a", myvar)