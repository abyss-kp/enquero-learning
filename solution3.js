/** Question=> Create a duplicate function
 *
 *  Try to complete the following ：
 *
 *  input： array，eg: [1, 2, 3, 4]
 *
 *  Outout：After a repetition array，E.g：[1, 2, 3 , 4, 1, 2, 3 ,4]
 *
 **/
function duplicate(array) {
    //you code in here
    array=array.concat(array);
    return array;
   }