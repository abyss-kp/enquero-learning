var people = [
    { firstName: "Karan", lastName: "Sah", age: 25 },
    { firstName: "Mohneesh", lastName: "Singh", age: 22 },
    { firstName: "Kapil", lastName: "Pandey", age: 22 },
    { firstName: "Karan", lastName: "Sah", age: 25 },
    { firstName: "Karan", lastName: "Sah", age: 25 },
    { firstName: "Mohneesh", lastName: "Singh", age: 22 },
    { firstName: "Kapil", lastName: "Pandey", age: 22 },
    { firstName: "Mohneesh", lastName: "Singh", age: 22 },
    { firstName: "Karan", lastName: "Sah", age: 25 },
    { firstName: "Mohneesh", lastName: "Singh", age: 22 },
    { firstName: "Kapil", lastName: "Pandey", age: 22 },
    { firstName: "Kapil", lastName: "Pandey", age: 22 }
]

const group = function (people, property) {
    if (property == 'firstName') {
        people.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
        console.log(people)
    }
    else if (property == 'lastName') {
        var a = people.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
        console.log(a)
    }
    else {
        people.sort((a, b) => a.age - b.age);
        console.log(people)
    }

}
group(people, 'age')
group(people, 'firstName')
group(people, 'lastName')
