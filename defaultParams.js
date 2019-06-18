function defaultParam1(name){
name=name || "kapil"
console.log(name)
}

function defaultParam2(name="kapil"){
console.log(name)
}

defaultParam1()
defaultParam1("Kapil Pandey")
defaultParam2()
defaultParam2("Kapil Pandey")