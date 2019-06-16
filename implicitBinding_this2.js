const person = {
    name: 'Karan',
    age: 40,
    hi() {
      console.log('hi ' + this.name)
    }
  }
  
  person.hi()