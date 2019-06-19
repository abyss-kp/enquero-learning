/**
*Write a JavaScript program to filter out the non-unique values in an array.
*/

var arr=[1,2,3,4,3,2,5,6,4,5]

console.log([...new Set(arr)])