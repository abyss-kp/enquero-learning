var obj = {
    name: {
        fName: 'Kapil',
        lName: "Pandey"
    },
    num: 1233456789,
    lang: 'JS',
    library: "React"
}
const deepCopy=(object)=>JSON.parse(JSON.stringify(object))
const objClone = deepCopy(obj)
objClone.lang = 'java'
console.log(objClone)