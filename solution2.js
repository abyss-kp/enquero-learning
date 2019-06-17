var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
Array.prototype.remove = function (value) {
    return this.filter(function(index){
        return index !== value;
    })
}

console.log(arr.remove(1));

Array.prototype.remove = function (value) {
    arrRemoved = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== value)
            arrRemoved.push(this[i])
    }
    return arrRemoved;
}
console.log(arr.remove(1));
