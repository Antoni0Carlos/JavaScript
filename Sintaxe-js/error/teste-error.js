function validarArray(arr, num){
    try{
    if(!arr && !num) throw new ReferenceError('Envie os parâmentos!');

   if(typeof arr !== 'object')
          throw new TypeError('Envie um elemento do tipo Array!');

   if(typeof num !== 'number')
        throw new TypeError('Envie um elemento do tipo Number!');

        return arr;
    }
    catch (e) {
        if(e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        }else if(e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        }else{
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }
}

console.log(validarArray([1,2,3], 0))