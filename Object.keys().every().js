/* 
Write a JavaScript program to compare two objects to determine if the first one 
contains equivalent property values to the second one.
*/
var one = {
    age: 25,
    hair: 'long',
    beard: true
}
var two = {
    hair: 'long',
    beard: true
}
const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches(one,two)); 
