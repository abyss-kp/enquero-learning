var regExp=/^(\d{4}[-]){3}\d{4}$/g;

const match=(num)=>regExp.test(num)

console.log(match("1234-5678-9012-3456"))
console.log(match("1234567890123456"))