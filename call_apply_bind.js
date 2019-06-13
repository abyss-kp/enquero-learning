const wizard = {
    name: 'Kapil',
    health: 100,
    heal: function(num1, num2) {
      this.health += num1 + num2;
    }
  }
  
  const archer = {
    name: 'Robin Hood',
    health: 50
  }
  console.log(archer)
  
  
  wizard.heal.call(archer, 20, 10)
  console.log("call ",archer)
  
  
  wizard.heal.apply(archer, [20, 30])
  console.log("apply ",archer)
  
  const healArcher = wizard.heal.bind(archer, 50, 60);
  healArcher()
  console.log("bind ",archer)