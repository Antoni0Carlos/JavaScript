class Dev{
    constructor(nome, idade, tipoDeDev, linguagem){
        this.nome = nome;
        this.idade = idade;
        this.tipoDeDev = tipoDeDev;
        this.linguagem = linguagem;
    }
    
    saudacao() {
        console.log(`Oi! Sou Dev ${this.tipoDeDev}, trabalho com ${this.linguagem} e me chamo ${this.nome} \n\n`);
    }

}

class Frontend extends Dev{
    constructor(nome, idade, linguagem, tipoDeDev, framework){
        super(nome, idade, linguagem, tipoDeDev);
        this.framework = framework;
    }

}

class Backend extends Dev {
    constructor(nome, idade, linguagem, tipoDeDev,  bancodedados){
        super(nome, idade, linguagem, tipoDeDev);
        this.bancodedados = bancodedados;
    }

}

const frontend1 = new Frontend("Antônio", "35", "Frontend", "Javascript", "React");
const backend2 = new Backend("Carlos", "22",  "Backend", "Java", "SQL Server");

console.log(frontend1);
frontend1.saudacao();

console.log(backend2);
backend2.saudacao();