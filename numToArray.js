// var num=12345
// console.log((""+num).split(""))

const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));
