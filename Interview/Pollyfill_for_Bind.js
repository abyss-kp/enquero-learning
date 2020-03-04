let object = {
  fName: "Kapil",
  lName: "Pandey"
}

let print = function () {
  console.log(`My name is ${this.fName}`)
}
// print.bind(object)()
Function.prototype.myBind = function (...args) {
  let obj = this
  return function () {
    obj.call(args[0])
  }
}

let printMyName = print.myBind(object)
printMyName()