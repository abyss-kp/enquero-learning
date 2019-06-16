
/*  
  race object is considered as array-like due to presence of length property

  The resulting array will consist of five elements, since the race object’ s
   length property is equal to five. Moreover, the last item of the array will
    have undefined value, since the source object has only four indexed 
 */
const race = {
  0: 'first rider',
  1: 'second rider',
  2: 'third rider',
  3: 'fourth rider',
  stadium: 'Motoarena',
  length: 5
};

const raceAsArray = Array.from(race);
console.log(raceAsArray);

const arrayOfUndefined = Array.from({ length: 5 });
const numbers = Array.from({ length: 5 }, (e, i) => i);

console.log(arrayOfUndefined);
console.log(numbers);

const cars = ['Porsche', 'Ferrari'];
const carsCopy = Array.from(cars);

console.log(carsCopy);

const letters = Array.from('Angular');

console.log(letters);