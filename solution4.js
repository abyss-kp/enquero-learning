/* Question
4. Write a script that finds the maximal increasing sequence in an array.
Example:

input     
3, 2, 3, 4, 2, 2, 4 
result
2, 3, 4

*/

var arr = [3, 2, 3, 4, 2, 2, 4]
const len = arr.length;

var index = 0;
var maxLen = 1;
var tempMaxLen = 1;
for (var i = 1; i < len; i++) {
    if (arr[i] > arr[i - 1]) {
        tempMaxLen++;
    }
    else {
        if (maxLen < tempMaxLen) {
            maxLen = tempMaxLen
            index = i - maxLen;
            tempMaxLen=1;
        }
    }
   // console.log(i,index,tempMaxLen); 
}

if(tempMaxLen>maxLen)
{
    maxLen=tempMaxLen;
    index=i-maxLen;
}
//console.log(index,maxLen); 
var ans = "";
for (let j = index; j < maxLen+index; j++) 
{
       ans=ans+arr[j]+" "; 
} 
console.log(ans)
