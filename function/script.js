/*const minhaFun = function () {
    console.log("Alguma coisa");
}

function minhaFun () {
    console.log("Alguma coisa");
}*/
/*const funcao = () => "Uma expressão e função";

funcao();*/
const obj = {
    thisLocal:  function(){
      const thisLocal =  (() => console.log(thisLocal))
      ()
      console.log(thisLocal)

    }
}

obj.thisLocal();