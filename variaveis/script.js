if(true) {
    var exposta = "exposta"; 
    let naoExposta = "naoExposta";
}
console.log(exposta);

for(let i = 0; i <= 10; i++) {
    var j = i;
}

console.log(j);

// como mudar o valor de uma constante

const variavel = 10;
variavel = 20;

console.log(variavel);

// coloquei mais um indice no array na const

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// tirei o ultimo indice do array na const

arr.pop();

console.log(arr);

const obj = {a: 1, b: 2};

// coloquei mais um objeto na const

obj.c = 3;

console.log(obj);

// tirei mais um objeto na const

delete obj.c;
 
console.log(obj)



