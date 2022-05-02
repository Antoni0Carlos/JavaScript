const litter = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
    return item * this.value;
    }, thisArg);
}
const num = [1, 2];

console.log('this -> litter', mapComThis(num, litter));
console.log('this -> orange', mapComThis(num, orange));