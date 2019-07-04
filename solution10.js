/**
 *
 *  Try to complete the following functions：
 *
 *  const src = [3, 6, 9]
 *  const target = [1, 6, 8]
 *
 *  const diff = difference(src, target)
 *
 *  console.log(diff) // [3, 9]
 *
 **/
function difference(src, target) {

    var arr=(src.filter((x)=>!target.includes(x)))
    return arr;
      
    }