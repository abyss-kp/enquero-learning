let object = {
  fName: "Kapil",
  lName: "Pandey"
}

let print = function (home, dist, state) {
  console.log(`My name is ${this.fName} and I am from ${home} ${dist} ${state}`)
}
// print.bind(object)()
Function.prototype.myBind = function (...args) {
  let obj = this
  return function (...args2) {
    obj.apply(args[0], [...args2, ...args.slice(1)])
  }
}

let printMyName = print.myBind(object, "Bhimtal", "Naintal", "Uttrakhand")
printMyName()