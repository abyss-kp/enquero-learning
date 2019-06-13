/*  Question
1. You will write a script which will alloate array of 20 integers 
making sure that we initializes each element by its index and multiplied by 5 . Print the output in the console
*/

var arr=new Array(20);
//method 1
for(let i=0;i<20;i++)
{
    arr[i]=i*5;
}
console.log(arr)



//method2
var arr2=[];
for(let i=0;i<20;i++)
{
    arr2.push(i*5);
}
console.log(arr2)

