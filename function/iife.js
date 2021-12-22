/*Exemplo de sintaxe: 
    (function (){
        statements
    })();*/

// Uma função já sendo chamada automaticamente

        const resultado = (function () {
        const myname = "Carlos"
        return myname;
    }
    )()

    console.log(resultado)