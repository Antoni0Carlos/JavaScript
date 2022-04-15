/* 
*  Uma função callback é uma função passada a outra função como argumento, que é então invocado 
*  dentro da função externa para completar algum tipo de rotina ou ação.
*
*
* Aqui está um pequeno exemplo:
*/

function greeting(name) {
    alert('Olá ' + name);
}

function processUserInput(callback) {
    var name = prompt('Por favor insira seu nome.');
    callback(name);
}

processUserInput(greeting);

/*
*  

*    p.then(quandoRealizada, quandoRejeitada);

*   p.then(function(valor) {
    // sucesso
*    }, function(motivo) {
    // rejeitada
});
*/

// Aqui está um outro pequeno exemplo de callback:

const somar = (x, y) => x + y;
const calcular = (x, y, computar) => computar(x, y);
const resultado = calcular(20, 30, somar);

console.log(resultado);
