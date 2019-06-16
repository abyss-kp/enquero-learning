var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  var num = 42;
  gLogNumber = function () { console.log(num); }
  gIncreaseNumber = function () { num++; }
  gSetNumber = function (x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber();
gSetNumber(5);
gLogNumber();

var oldLog = gLogNumber;
setupSomeGlobals();
gLogNumber();

oldLog() 