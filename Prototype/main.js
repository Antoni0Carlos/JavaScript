const animal  = {
    som: "um som de animal",
    tipo: "animal",
    emitirSom: function() {
        console.log(this.som)
    }
}

const gato ={
    som: "miau",
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoRaivoso = {
    tipo: "gatoRaivoso",
    miarForte: function(){
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, animal)
gatoRaivoso.miarForte()

console.log('TESTES')