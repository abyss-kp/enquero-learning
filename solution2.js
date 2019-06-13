/*  Question 
2. Write a script that compares two char arrays  (letter by letter).
*/


var str1="kapil";
var str2="pandey";

var char1=Array.from(str1)
var char2=Array.from(str2)

var flag=true;
if(char1.length!=char2.length)
console.log("character arrays are not equal")
else{
    char1.sort();
    char2.sort();
    for(let i=0;i<char1.length;i++)
    {
        if(char1[i]!=char2[i])
        {
             console.log("Both have different elements")
             flag=false;
            break;
        }
    }
    if(flag)
    {
        console.log("Both have same elements")
    }
}
