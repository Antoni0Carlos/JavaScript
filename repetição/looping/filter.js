const numeros = [12, 24, 56, 34, 2, 567, 2, 6, 88, 3, 5, 7, 758]
const par = n % 2 === 0
const numerosPar = numeros.filter(par)

console.log(` Array com numeros pares: ${numerosPar}`)