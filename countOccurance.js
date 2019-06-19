/**
 * Write a JavaScript program to 
 * count the occurrences of a value in an array.
*/

//#Source https://bit.ly/2neWfJ2 
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));

