const arr=[1,2,3,4,5,6,7,8,9];
const double=[];
const newArr=arr.forEach((num)=>{
    num*2;
    double.push(num*2);
})
console.log(double);

const mapArr=arr.map(num=>num*2)
console.log(mapArr);