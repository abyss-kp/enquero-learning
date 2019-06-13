//this
var obj = {
    name: 'Kapil',
    tell: function() {
      return 'I am ' + this.name;
    },
    tellAgain: function() {
     // return 'I am ' + this.name + '!'
      return this.tell() +" !";
    }
  }
  
  function importantPerson() {
    console.log(this.name)
  }
  
  const name = 'Karan';
  const obj1 = { name: 'Amit', importantPerson: importantPerson}
  const obj2 = { name: 'Rahul', importantPerson: importantPerson}
  
  
  importantPerson()
  
  obj1.importantPerson()
  obj2.importantPerson()
  
  obj.tellAgain();