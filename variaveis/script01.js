let jogador1 =  -1;
let jogador2 = 1;
let placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos'): console.log('jogadores Invalidos');

//usando if
 if(jogador1 > 0) {
        console.log('jogador 1 marcou 1 ponto!');
        placar = jogador1 > jogador2;
 }
 //usando if  else
 else if(jogador2 > 0){
        console.log("jogador 2  marcou ponto!")
        placar = jogador2 > jogador1;
}
//usando else
else{
        console.log("ninguem marcou nada!")
}
/*
swicth (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log('jogadou 2 gamha')
}*/