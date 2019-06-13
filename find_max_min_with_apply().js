const array = [1,2,3];
function getMaxNumber(arr){
  console.log(Math.max.apply(null, arr));  
}

function getMinNumber(arr){
    console.log(Math.min.apply(null, arr));  
  }

getMaxNumber(array)
getMinNumber(array)