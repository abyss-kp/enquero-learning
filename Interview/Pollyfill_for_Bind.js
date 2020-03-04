let object = {
  fName: "Kapil",
  lName: "Pandey"
}

let print = function () {
  console.log(`My name is ${this.fName}`)
}
print.bind(object)()

