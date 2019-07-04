/**
 *
 * Try to complete the following ：
 *
 *  console.log(camelcase('HELLO WORLD')) // helloWorld
 *
 *  console.log(camelcase('HELLO         WORLD')) // helloWorld
 *
 *  console.log(camelcase('muthu')) // muthu
 *
 *  console.log(camelcase('hi----you')) // hiYou
 *
 **/
function camelcase(str) {
    str=str.toLowerCase()
    var arr=str.split(/[\s]+/);
   for(let i=1;i<arr.length;i++){
   arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
   }
   var x=arr.toString();
   x=x.replace(/[^\w]|,/g,"")
   return x;
   }