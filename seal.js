let profile={
    name:"Kapil"
}

//does not allow to modify and add new properties
Object.seal(profile)

profile.age=22

profile.name="Kapil Pandey"

console.log(profile)