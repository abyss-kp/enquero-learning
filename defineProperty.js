let profile={
    name:"kapil"
}

Object.defineProperty(profile,'age',{
    value:3,
    writable:false
})

profile.name="Kapil Pandey"
profile.age=22

console.log(profile)