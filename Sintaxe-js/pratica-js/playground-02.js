function filterPares(arr) {
   return arr.filter(callback)
}

function callback(item) {
    return item % 2 !== 0;
}

const myArray = [12, 32, 45, 13, 7];
console.log(filterPares(myArray));