const arr=[1,2,3,4,5,6,7,8,9];


const reduceArr=arr.reduce((accumulator,num)=>{
    return accumulator+num;
})

const reduceArr2=arr.reduce((accumulator,num)=>{
    return accumulator+num;
},10)
console.log(reduceArr);
console.log(reduceArr2);