/**
 * Write a JavaScript program to test the first character of a string is uppercase or not.
  */

  var regExp=/^[A-Z]/;
  var match=(str)=>regExp.test(str);
  console.log(match("Kapil"))
  console.log(match('kapil'))