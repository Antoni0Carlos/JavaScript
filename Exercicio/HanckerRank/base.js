// Exercício 1 - Elabore um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

//Exemplo:
// valor do jontar: R$ 80,00
// taxa do garçom: R$ 8,00
// total a pagar: R$ 88,00

let valorJantar = 200;
let taxaGarcom = (10 / 100) * 200;
let total = valorJantar + taxaGarcom;
console.log("Total a pagar é " + total)
