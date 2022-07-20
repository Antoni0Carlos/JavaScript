/*Alice e Bob criaram um problema para o HackerRank. Um revisor classifica os dois desafios, atribuindo pontos em uma escala de 1 a 100 para três categorias: clareza do problema , originalidade e dificuldade .

A classificação para o desafio de Alice é a trinca a = (a[0], a[1], a[2]) , e a classificação para o desafio de Bob é a trinca b = (b[0], b[1], b [2]) .

A tarefa é encontrar seus pontos de comparação comparando a[0] com b[0] , a[1] com b[1] e a[2] com b[2] .

Se a[i] > b[i] , então Alice recebe 1 ponto.
Se a[i] < b[i] , Bob recebe 1 ponto.
Se a[i] = b[i] , nenhuma das pessoas recebe um ponto.
Os pontos de comparação são o total de pontos que uma pessoa ganhou.

Dados a e b , determine seus respectivos pontos de comparação.*/

function comparator(a, b){ 
    let alice = 0;
    let bruno = 0;

    for (let index = 0; index < a.length; index+= 1) {
        if (a[index] > b[index]) {
            alice += 1;
        }
        else if(a[index] < b[index]) {
            bruno += 1;
        }
    };
    return [alice, bruno];
};

console.log(comparator([17, 28, 30], [99, 16, 8]));