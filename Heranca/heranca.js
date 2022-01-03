class Dev{
    constructor(nome, idade, linguagem){
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
    }
    
    saudacao() {
        console.log(`Oi! Sou Dev Frontend, trabalho com ${this.linguagem} e me chamo ${this.nome} \n\n`);
    }

}

/*
const dev = new Dev ("Carlos", 25, "Javascript");
console.log(dev);
dev.saudacao();*/

class Frontend extends Dev{
    constructor(nome, idade, linguagem, framework){
        super();
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.framework = framework;
    }
    
    saudacao() {
        console.log(`Oi! Sou Dev Frontend, trabalho com ${this.linguagem} e me chamo ${this.nome} \n\n`);
    }

}

class Backend extends Dev {
    constructor(nome, idade, linguagem, bancodedados){
        super();
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.bancodedados = bancodedados;
    }
    
    saudacao() {
        console.log(`Oi! Sou Dev Backend, trabalho com ${this.linguagem} e me chamo ${this.nome} \n\n`);
    }

}

const frontend1 = new Frontend("Antônio", "35", "Javascript", "React");
const backend2 = new Backend("Carlos", "22", "Java", "SQL Server");

console.log(frontend1);
frontend1.saudacao();

console.log(backend2);
backend2.saudacao();