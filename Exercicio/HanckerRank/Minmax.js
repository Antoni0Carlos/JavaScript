/*Imprime as proporções de valores positivos, negativos e zero na matriz. Cada valor deve ser impresso em uma linha separada com 6 dígitos após o decimal. A função não deve retornar um valor.*/

function Minmax(arr) {
    let element = 0; 
    let totalPositive = 0;
    let totalNegative = 0;
    let totalZero = 0;    

    for(index = 0; index < arr.length; index++) {
        if(arr[index] < totalNegative) {
            totalNegative++ // incrementa os numeros negativos do array
        } else if(arr[index] > totalPositive){
            //arr[index] > totalPositive
            totalPositive++
        } else{
            arr[index] >= totalZero
            totalZero+= 1;
        }
    }
                                                    
    if(totalNegative <= totalPositive ) {
            console.log(totalNegative / arr.length, totalPositive / arr.length, totalZero / arr.length)  
        }
}

console.log(Minmax([2,3,8,-4,6,0,9,0]));