/**
 *
 *  Try to complete the following ：
 *
 *  const what = 'Beautiful climate!';
 *
 *  value(what) === 'Beautiful climate!'
 *
 *  const hello = function() {
 *      return 'world'
 *  }
 *
 * value(hello) === 'world'
 *
 **/
function value(anything) {
    //you code in here
    while(typeof(anything)==="function")
    anything=anything();
    return anything;
  }
  