/**
 *
 * Try to complete the following ：
 *
 *  times(1, String) / / ['0']
 *
 *  times(3, Boolean) // [false, true, true]
 *
 *  times(4, function(i) { return 'Hello.' + i; }) // ['Hello.0', 'Hello.1', 'Hello.2', 'Hello.3']
 *
 **/
function times(n, func) {
    //you code in here
    var arr=[];
    let i=0;
    if(func==String)
    {
    while(i<n)
    arr.push(""+i++)
    }
    else if(func==Boolean)
    {
      while(i<n)
    arr.push(i++===0?false:true)
    }
    else
    {
      while(i<n)
      arr.push(func(i++))
    }
    return arr;
   }
   