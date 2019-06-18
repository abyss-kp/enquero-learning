var a={
    name:"kapil",
    age:22,
    gender:"male"
}

var searchProperty="name"
console.log(a.searchProperty)
/* 
all property keys are strings. When we use dot notation, JS is thinking we
are looking for a key whose value is a string of whatever is after the dot. So

a.searchProperty
looks for a property of 'a' with a key of “searchProperty” i.e
a{
    searchProperty:"Value"
}

but our object 'a' doesn’t have a property called “searchProperty”.
*/

console.log(a[searchProperty])

