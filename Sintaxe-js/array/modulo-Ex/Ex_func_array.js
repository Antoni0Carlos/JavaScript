//criei um array dom 6 indices
const number = [6, 3, 4, 100, 3, 4];
const names = ['mike', 'alpha', 'tango'];

// positivo, negativo ou 0;
/*
const sorted = number.sort((a, b)=> a - b // só funciona em numero 
    //console.log(b, String(b).charCodeAt(0))
    /*if (a < b) return -1;
    if (a > b) return 1;
    return 0;
);*/

const sorted = names.sort((a, b)=> {
    return a.localeCompare(b);
});

console.log(sorted)
