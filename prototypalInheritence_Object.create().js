const armour = {
  attack: function () {
    return 'atack with ' + this.weapon
  }
}
function player(name, weapon) {
  newPlayer = Object.create(armour)
  newPlayer.name = name;
  newPlayer.weapon = weapon
  return newPlayer
}


const sam = player('Sam', 'bow');
const peter = player('Peter', 'bow');
console.log(sam.attack())