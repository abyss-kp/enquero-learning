var people = [
    { firstname: 'Mahatma', lastname: 'Gandhi', age: 78 },
    { firstname: 'Goutam', lastname: 'buddha', age: 80 }];
var youngestAge = Number.MAX_VALUE;
var youngestPerson;
function returnYoungestPerson(people) {
    people.forEach((person) => {
        if (person.age < youngestAge) {
            youngestAge = person.age;
            youngestPerson = person;
        }
    });
    console.log('Youngest person is ' + youngestPerson.firstname + ' ' + youngestPerson.lastname + ', who is ' + youngestPerson.age + ' old');
}
returnYoungestPerson(people)
