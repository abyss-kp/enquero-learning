/** 
* Write a JavaScript program to converts a 
* comma-separated values (CSV) string to a 2D array
*/

var str = "Kapil,Karan,Mohneesh,Somesh,Jatin"

var arr = str.split(',')
arr.forEach(key => console.log(key))