var cat = {
    property1: "meow",
    property2: "hiss"
}

var dog = { attribute1: "loving", attribute2: "trueBlue" }
cat["loving"] = "something cat's are not"

/* 
cat.dog.attribute1 will give
//TypeError: Cannot read property 'attribute1' of undefined
*/

console.log(cat[dog["attribute1"]])