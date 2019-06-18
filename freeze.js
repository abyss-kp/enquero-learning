let profile={
    name:"Kapil"
}

profile.age=22

//does not allow to modify and add new properties
Object.freeze(profile)

profile.lastName="Pandey"

console.log(profile)