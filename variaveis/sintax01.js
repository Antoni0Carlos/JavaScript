// declarações de variaveis e constantes

let mensagem = 87;
console.log(mensagem);
mensagem = 55;
console.log(typeof(mensagem));

// funções

function somar (numA, numB) {
    return numA + numB;
};
let resultado  = somar(5, 7);
console.log(resultado);

let somar = function(){
    return numA + numB;
};
let resultado  = somar(5, 7);
console.log(resultado);

let somar = (numA, numB) => {
    return numA + numB;
};
let resultado  = somar(5, 7);
console.log(resultado);

// vetores

let finalSemana = ['Sabado', 'Domigo', 'Segunda', 'Terça', 'Quarta']
console.log(finalSemana[0]);
finalSemana.push('Sextou');
console.dir(finalSemana);

// objetos
let agenda = {
    nome : 'Carlos',
    sobrenome:  'Santos',
    idade: 22
}
console.log(agenda);