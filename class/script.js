/*console.log("EXECICIO_01")
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

const carro1 = new Carro("Audi", 2021);
const carro2 = new Carro("Ferrari", 2011);

console.log(carro1, carro2);

console.log("EXECICIO_02")
const Livro = {
    titulo: "MDN javascript",
    editora: "Casa do código",
    paginas: 204,
    anunciar: function() {
        console.log("Antôonio indica o livro" + this.titulo + "!")
    }
}

Livro.anunciar();
*/
/*------------------------CLASS-------------------------- */

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){ 
        console.log(`Titulo; ${this.nome}`);
    }
    descreverTitulo() {
        console.log (`${this.nome} é um lvro da editora ${this.editora} e tem ${this.paginas} páginas`);
    }
}

const NodeJs = new Livro("Primeiros passos com NodeJS", "Casa do código", 344);
NodeJs.anunciarTitulo();
NodeJs.descreverTitulo();

class LivroColecao extends Livro{
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar");
LogicaDeProgramacao.descreverColecao()