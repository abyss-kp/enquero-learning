/**
 * Write a JavaScript program that work as a trim function (string) using regular expression
  */
var regExp=/^\s+|\s+$/;
const trim=(str)=>str.replace(regExp,'')
var str=" Kapil pandey   "
console.log(str)
console.log(trim(str))