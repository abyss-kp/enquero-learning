let obj={
    user1:"kapil",
    user2:"karan",
    user3:"Somesh",
    user4:"Mohneesh"
}

Object.keys(obj).forEach((key,index)=>{
    console.log(key,obj[key],index)
})


Object.values(obj).forEach(value=>{
    console.log(value)
})


Object.entries(obj).forEach(value=>{
    console.log(value)
})

// Object.entries(obj).map(value=>{
//     return value[1]+value[0].replace("user","");
// })
