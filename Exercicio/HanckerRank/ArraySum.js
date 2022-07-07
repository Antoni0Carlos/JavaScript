/*Dada uma matriz de inteiros, encontre a soma de seus elementos.

Por exemplo, se a matriz, = [1,2,3,] 1+2+3 = 6, então volte 6.

Descrição da função

Complete a função simpleArraySum no editor abaixo. Ele deve retornar a soma dos elementos do array como um inteiro.

simpleArraySum tem os seguintes parâmetros:

ar : uma matriz de inteiros
Formato de entrada

A primeira linha contém um número inteiro, n, denotando o tamanho da matriz.
A segunda linha contém n inteiros separados por espaço que representam os elementos do array.

Restrições

0 < n, ar[i] < 1000

Entrada de amostra
31
*/

function simpleArraySum(ar) {
        let soma = 0;
        for(let index = 0; index < ar.length; index += 1) {
            soma = soma + ar[index];
        }
        return soma;
}; 
console.log(simpleArraySum([1,2,3,10]));