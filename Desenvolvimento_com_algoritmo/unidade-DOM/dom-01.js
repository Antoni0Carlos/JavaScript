// pegando no documento o elemento por Id
document.getElementById("Id")
// verificando o elemento por Id
console.dir(document.getElementById('Id-app'))
// pegando no documento o elemento por nome da classe
document.getElementsByClassName('Class-app')
// pegando o elemento por nome da classe
let ibtercos = document.getElementsByClassName('Class-app')
//selecionando a class .class-app
document.querySelector(".class-app")
//selecionando todas as tags a EX
let as = document.querySelectorAll("a")
as.forEach(a => console.log(a))

let share = document.querySelector(".class")

share.textContent

share.innerHTML = "lauch"