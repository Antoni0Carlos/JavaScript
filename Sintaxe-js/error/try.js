function verificarPalindromo (string) {
    if(!string) throw "String inávida";
    return string === string.split('').reverse().join('');
}

function tryCatch (string) {
    try{
        verificarPalindromo(string)
    }
    catch(e){
        throw e;
    }
    finally{
        console.log("a string enviada foi: " + string);
    }
}
tryCatch('');