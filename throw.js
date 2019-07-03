/**
 * In this challenge, we practice using throw and catch statements to work with custom error messages.
  */
var num=1
 function isPositive(a) {
    if (a == 0)
        throw new Error("Zero Error")
    else if (a > 0)
        return "YES"
    else if (a < 0)
        throw new Error("Negative Error");
}
console.log(isPositive(num))