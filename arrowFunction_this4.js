const person4 = {
    name: 'Karan',
    age: 40,
    hi: function() {
      var inner = () => {
        console.log('hi ' + this.name)
      }
      return inner()
    }
  }
  
  person4.hi()