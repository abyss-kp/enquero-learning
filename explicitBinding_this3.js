const person3 = {
    name: 'Karan',
    age: 40,
    hi: function() {
      console.log('hi' + this.setTimeout)
    }.bind(window)
  }
  
  person3.hi()