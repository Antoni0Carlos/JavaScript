// Metodo fecth
/*
fetch(url, options)
    .then(response => response.json())
    .then(json =>console.log(json))
*/
    // retorna uma Promisse

    fetch('https://endenreco-api,com/,', {
       method: 'GET',
       cache: 'no-cache',

    })

    .then(response => response.json())
    .then(json =>console.log(json))

    // retorna uma Promisse
