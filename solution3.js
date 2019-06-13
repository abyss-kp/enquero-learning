/*   Question

3 . Write a script that finds the maximal sequence of equal elements in an array.

Example:

input     
2, 1, 1, 2, 3, 3, 2, 2, 2, 1  
result
2, 2, 2

*/


var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]

//var index = 0;
var maxValue = arr[0];
var max = 1;
for (let i = 0; i < arr.length - 1; i++) {
    let tempMax=1;
    if (arr[i] == arr[i + 1]) {
        tempMax++;
        i++;
        while (arr[i] == arr[i + 1]) {
            tempMax++;
            i++;
        }
        if(tempMax>max)
        {
        max=tempMax;
        maxValue=arr[i-1]
        }
    }
}
var ans=new Array(max)
ans.fill(maxValue)
console.log(ans)
