const Book = function(nome,  editora,  paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function() {
        return gNome
    }
    this.getEditora = function() {
       return gEditora
    }
    this.getPaginas = function() {
        return gPaginas
    }
}

const GraghQl = new Book("GraghQl", "Casa do Código", 256);
console.log(GraghQl.getNome());
console.log(GraghQl.getEditora());
console.log(GraghQl.getPaginas());

const name = "Antônio carlos";

const temp = new String(name);
console.log(temp.toString());
