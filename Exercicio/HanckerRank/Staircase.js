/*Sua base e altura são iguais a. É desenhado usando #símbolos e espaços. A última linha não é precedida por nenhum espaço.
Escreva um programa que imprima uma escada de tamanho.*/

function staircase(n) {
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n - 1;

    for (let LineIndex = 0; LineIndex < n; LineIndex+= 1) {
        for (let ColumnIndex = 0; ColumnIndex < n; ColumnIndex+= 1) {
            if (ColumnIndex < inputPosition) {
                inputLine += ' ';
            } else {
                inputLine += symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;  
    }   
}

staircase(19);
