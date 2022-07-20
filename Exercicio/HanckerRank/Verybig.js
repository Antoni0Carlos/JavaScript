/*
Neste desafio, você deve calcular e imprimir a soma dos elementos em uma matriz, tendo em mente que alguns desses inteiros podem ser bem grandes.
*/

function aVeryBigSum(ar){
    let soma = 0;
    for (let index = 0; index < ar.length; index+= 1) {
        soma = soma + ar[index];
    }
    return soma;
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));